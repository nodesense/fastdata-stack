FROM flink:1.15.3-scala_2.12-java11
RUN apt-get update && apt-get install -y iputils-ping


ENV PYFLINK_CLIENT_EXECUTABLE="/opt/pyflink/bin/python"

ENV PYTHONPATH="/opt/pyflink/bin/python"
ENV PATH="/root/miniconda3/bin:${PATH}"
ARG PATH="/root/miniconda3/bin:${PATH}"
RUN apt-get update

RUN apt-get install -y wget && rm -rf /var/lib/apt/lists/*

RUN wget \
    https://repo.anaconda.com/miniconda/Miniconda3-py38_22.11.1-1-Linux-x86_64.sh \
    && mkdir /root/.conda \
    && bash Miniconda3-py38_22.11.1-1-Linux-x86_64.sh -b \
    && rm -f Miniconda3-py38_22.11.1-1-Linux-x86_64.sh

RUN conda --version

RUN pip install google

# RUN pip install apache-flink==1.15.3

RUN  usermod -aG sudo flink
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers


RUN python -m venv /opt/pyflink && \
    cd /opt/pyflink && . bin/activate \
    pip install apache-flink==1.15.3 && \
    pip install google



RUN chmod -R 777 /opt/pyflink
RUN chmod -R 777 /opt/pyflink/bin
RUN chmod  777 /opt/pyflink/bin/python

RUN chown -R flink:flink /opt/pyflink

# RUN ln -s /root/miniconda3/bin/python /usr/bin/python
# RUN chmod  777 /usr/bin/python


RUN cp -r /opt/flink/opt/flink-table-planner_2.12-1.15.3.jar  /opt/flink/lib/
RUN mv /opt/flink/lib/flink-table-planner-loader-1.15.3.jar /opt/flink/opt

COPY mount/jars/* /opt/flink/lib/
