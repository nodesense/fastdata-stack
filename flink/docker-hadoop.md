hadoop fs  -ls hdfs://namenode:9000

hadoop fs  -mkdir hdfs://namenode:9000/test/input

hadoop fs  -copyFromLocal /home/karthik/work/flink-cluster/flink/code/input/test.parquet/ hdfs://namenode:9000/test/input

hadoop fs  -ls hdfs://namenode:9000/test/input

docker-compose exec hive-server bash

/opt/hive/bin/beeline -u jdbc:hive2://localhost:10000

CREATE TABLE pokes (foo INT, bar STRING);

LOAD DATA LOCAL INPATH '/opt/hive/examples/files/kv1.txt' OVERWRITE INTO TABLE pokes;