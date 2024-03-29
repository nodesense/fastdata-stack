# Git checkout

```
git clone https://github.com/nodesense/fastdata-stack
cd fastdata-stack

```


# Change default port for local instance

listen on port 8081 default change to other by 

```
nano $FLINK_HOME/conf/flink-conf.yaml 
```


```
rest.port: 8282
```


# Host File Mapping

```
sudo nano /etc/hosts
```


```
127.0.0.1  broker
127.0.0.1  schema-registry
127.0.0.1  datanode
127.0.0.1  namenode
127.0.0.1  hive-metastore

```

```
pip install apache-flink==1.15.3
```

Save File  Ctrl + O   to Write

Then Enter

Then Ctrl + X to exit



# Download from one drive

https://gopalakrishnan-my.sharepoint.com/:f:/g/personal/gs_training_sh/EgrMKreM6AxEhtN45wEneOMBdxOBxxcKRpWar9luvVjSHg?e=wMiwWP

create a data folder, 
and extract and place extracted files into  'data' folder, files are in json format, 1 record per line

create portainer 


```
docker volume create portainer_data2x

docker run -d -p 8000:8000 -p 9443:9443 --name portainer2x \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data2x:/data \
    portainer/portainer-ce:2.9.3

```

Open portainer in https://localhost:9443 and add security exception for https in the browser

Create user name: admin
Password: admin@123

```

```



create a data folder and run

# DOCKER COMPOSE first time

```
cd flink 

mkdir -p mount/jars

mkdir -p mount/data

wget  -P mount/data  https://files.grouplens.org/datasets/movielens/ml-latest-small.zip

unzip mount/data/ml-latest-small.zip -d mount/data/


sudo chmod -R 777 mount/

sudo chown -R 777 mount/

sh ./jars.sh


docker build -t flink:test -f ./Dockerfile .

docker compose up 



to stop docker compose while removing volumes

docker compose down -v 


```

# Docker compose once all setup 

```
cd flink


docker compose up 

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


# KAFKA 

```


Note: topic name may vary....


kafka-topics  --create --bootstrap-server broker:9092 --replication-factor 1 --partitions 3 --topic nse-live-ticks3
kafka-topics  --create --bootstrap-server broker:9092 --replication-factor 1 --partitions 2 --topic stock-aggregates2
kafka-topics  --create --bootstrap-server broker:9092 --replication-factor 1 --partitions 2 --topic     candles-live2
kafka-console-consumer --bootstrap-server broker:9092 --topic  nse-live-ticks3  --from-beginning
kafka-console-consumer --bootstrap-server broker:9092 --topic  nse-live-ticks3  

kafka-console-consumer --bootstrap-server broker:9092 --topic  stock-aggregates4
kafka-console-consumer --bootstrap-server broker:9092 --topic  candles-live2

```

# HADOOP MOVIE LENS

portainer docker hadoop-client console


```
cd data
hdfs dfs -put  ml-latest-small hdfs://namenode:9000/ 

hdfs dfs -ls  ml-latest-small hdfs://namenode:9000/ml-latest-small




```

```
hdfs dfs -put /data hdfs://namenode:9000/
hdfs dfs -ls hdfs://namenode:9000/
hdfs dfs -ls hdfs://namenode:9000/data/

```