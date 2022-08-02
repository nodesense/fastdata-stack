# Download from one drive

https://gopalakrishnan-my.sharepoint.com/:f:/g/personal/gs_training_sh/EgrMKreM6AxEhtN45wEneOMBdxOBxxcKRpWar9luvVjSHg?e=wMiwWP

create a data folder, 
and extract and place extracted files into  'data' folder, files are in json format, 1 record per line

create a data folder and run

# DOCKER COMPOSE 

```
cd flink 

mkdir -p mount/nfs


mkdir -p mount/ha
mkdir -p mount/jars
 
sudo chmod -R 777 mount/

sudo chown -R 777 mount/

sh ./jars.sh



docker build -t flink:test -f ./Dockerfile .

docker compose up 



to stop docker compose while removing volumes

docker compose down -v 


```

## FOR KAFKA DATA SIMULATION

do on main folder, not inside flink folder..


```
npm install 
```

```
node publish-tick.js topicname file-path-to-publish symbol   INTERVAL_IN_MS NUMBER_OF_RECORDS_TO_PUBLISH
```

optionals: INTERVAL_IN_MS,  NUMBER_OF_RECORDS_TO_PUBLISH

where as NUMBER_OF_RECORDS_TO_PUBLISH is set to 1 by default and INTERVAL_IN_MS is set to 1000 ms by default


for all symbols

```
node publish-tick.js nse-live-ticks-simulate4  data/2022-07-07.json
```

specific symbol

```
node publish-tick.js nse-live-ticks-simulate4  data/2022-07-07.json INFY
```