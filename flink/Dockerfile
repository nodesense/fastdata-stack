FROM flink:1.15.3-scala_2.12-java11
RUN apt-get update && apt-get install -y iputils-ping


# ENV PATH="/root/miniconda3/bin:${PATH}"
# ARG PATH="/root/miniconda3/bin:${PATH}"
RUN apt-get update

RUN apt-get install -y wget && rm -rf /var/lib/apt/lists/*

COPY mount/jars/* /opt/flink/lib/

USER flink
RUN wget \
    https://repo.anaconda.com/miniconda/Miniconda3-py38_22.11.1-1-Linux-x86_64.sh \
    && mkdir /opt/flink/.conda \
    && bash Miniconda3-py38_22.11.1-1-Linux-x86_64.sh -b -p /opt/flink/miniconda3 \
    && rm -f Miniconda3-py38_22.11.1-1-Linux-x86_64.sh

# -p /opt/flink/miniconda3
#RUN conda --version

RUN /opt/flink/miniconda3/bin/pip install google

RUN /opt/flink/miniconda3/bin/pip install apache-flink==1.15.3

# RUN  usermod -aG sudo flink
# RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# RUN mkdir -p /home/flink && \
#     chmod -R 777 /home/flink

# RUN /opt/flink/miniconda3/bin/python -m venv /opt/flink/pyenv && \
#     cd /opt/flink/pyenv && . bin/activate \
#     pip install apache-flink==1.15.3 && \
#     pip install google

# RUN chmod -R 777 /home/flink/pyenv
# RUN chmod -R 777 /home/flink/pyenv/bin
# RUN chmod  777 /home/flink/pyenv/bin/python

# RUN chown -R flink:flink /home/flink

# RUN ln -s /root/miniconda3/bin/python /usr/bin/python
# RUN chmod  777 /usr/bin/python

# RUN chown -R flink:flink /opt/flink

RUN cp -r /opt/flink/opt/flink-table-planner_2.12-1.15.3.jar  /opt/flink/lib/
RUN mv /opt/flink/lib/flink-table-planner-loader-1.15.3.jar /opt/flink/opt

ENV PATH="/opt/flink/miniconda3/bin:${PATH}"

# ENV PYFLINK_CLIENT_EXECUTABLE="/home/flink/pyflink/bin/python"
# ENV PYTHONPATH="/home/flink/pyflink/lib/python3.8/site-packages"

