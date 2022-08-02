kafka-topics  --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4 --topic nse-live-ticks-simulate4
kafka-topics  --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4 --topic stock-aggregates4
kafka-topics  --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4 --topic     candles-live4
