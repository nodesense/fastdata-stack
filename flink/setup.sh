#!/usr/bin/sh

docker build -t flink:test -f ./Dockerfile .


mkdir -p mount/ha
mkdir -p mount/code
mkdir -p mount/jars


chmod -R 777 mount/
chown -R 777 mount/

cd haproxy

docker build -t haproxy:test -f ./Dockerfile.haproxy .
