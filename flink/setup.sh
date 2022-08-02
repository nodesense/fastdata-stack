#!/usr/bin/sh

docker build -t flink:test -f ./Dockerfile .


mkdir -p mount/nfs


mkdir -p mount/ha
mkdir -p mount/jars
 
sudo chmod -R 777 mount/

sudo chown -R 777 mount/

cd haproxy

docker build -t haproxy:test -f ./Dockerfile.haproxy .
