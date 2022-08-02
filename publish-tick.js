import { fstat } from 'fs';
import  {Kafka} from   'kafkajs';
import   lineReader  from 'line-reader';
import fs from 'fs';


const kafkaClient = new Kafka({
    clientId: 'nse-tickdata-live',
    brokers: ['localhost:9092']
  })

  // ? process.argv[2] : "nse-live-ticks-simulate4"

const TOPIC = process.argv[2] ;

console.log("TOPIC to publish ", TOPIC)

if (!TOPIC) {
  console.log("TOPIC NEEDED ", TOPIC)
  process.exit();
}


const producer = kafkaClient.producer()



const TickFile  =  process.argv[3] // "/media/krish/IntelNVMe/truedata/flink-ticks-json/2022-07-07.json"
console.log("File to publish ", TickFile)
let symbol = process.argv[4];
console.log("Symbol to publish  ", symbol ? symbol : 'ALL SYMBOLS');

if (!fs.existsSync(TickFile)) {
  console.log("File doesn't not exit ", TickFile)
  process.exit(-1)
}

const INTERVAL = +process.argv[5]? +process.argv[5] : 1000 
const TICKS_TO_PUBLISH = +process.argv[6]? +process.argv[6] : 1 

const queue = []

setInterval( () => {
  const ticks = queue.slice(0, TICKS_TO_PUBLISH)
  queue.splice(0, TICKS_TO_PUBLISH)
 
  updateKafka(ticks)
}, INTERVAL)



lineReader.eachLine(TickFile, function(line, last) {
    //console.log(`Line from file: ${line}`);
    const tick = JSON.parse(line)
    
    if (symbol && tick.Symbol != symbol) return;
    queue.push(tick)

    
    if(last) {
      console.log('Last line printed.');
      const used = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
    }
  });
 

  async function  updateKafka(ticks) {
    if (ticks.length == 0) {
      console.log("no dta for kafka");
      return;
    }

    await producer.connect();

      const msgs = []
     
      for (let tick of ticks) {
        // console.log(tick.Timestamp, new Date(tick.Timestamp));
        if (!tick.Timestamp) continue;

       

        tick.Timestamp = new Date(tick.Timestamp)
           
          const message = {
            //key: point.asset,
            key: tick.Symbol,
          //  value: JSON.stringify(point),
          value: JSON.stringify(tick),
            timestamp:  tick.Timestamp
          }
   
          // if (tick.Symbol == 'NIFTY 50') {
          //   console.log("Timestamp as is ", tick.Timestamp)
          //   console.log("Date  ", new Date(tick.Timestamp))
          //   console.log("Date Z ", new Date(tick.Timestamp + 'Z'))
          //   console.log("JSON  ", JSON.stringify(tick))
            
          // };

          console.log(tick)
          msgs.push(message)     
  }

  console.log("writing to kafka ");

  await producer.send({
    topic: TOPIC,
    messages: msgs
  })

  
}
