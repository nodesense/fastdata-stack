./bin/flink run \
      --detached \
      ./examples/streaming/StateMachineExample.jar

./bin/flink list

./bin/flink savepoint \
      $JOB_ID \ 
      /tmp/flink-savepoints

./bin/flink savepoint \ 
      --dispose \
      /tmp/flink-savepoints/savepoint-cca7bc-bb1e257f0dab \ 
      $JOB_ID

./bin/flink stop \
      --savepointPath /tmp-flink-savepoints \
      $JOB_ID

./bin/flink run \
      --detached \ 
      --fromSavepoint /tmp/flink-savepoints/savepoint-cca7bc-bb1e257f0dab \
      ./examples/streaming/StateMachineExample.jar
