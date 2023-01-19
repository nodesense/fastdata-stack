FROM flink:1.15.3-scala_2.12-java11
RUN apt-get update && apt-get install -y iputils-ping

RUN cp -r /opt/flink/opt/flink-table-planner_2.12-1.15.3.jar  /opt/flink/lib/
RUN mv /opt/flink/lib/flink-table-planner-loader-1.15.3.jar /opt/flink/opt

COPY mount/jars/* /opt/flink/lib/
