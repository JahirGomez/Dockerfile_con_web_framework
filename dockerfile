FROM ubuntu:latest
MAINTAINER jahirgomez jahirgomez1714@gmail.com
RUN apt-get update
RUN apt-get -y install apache2
RUN git clone https://github.com/JahirGomez/Dockerfile_con_web_framework.git
RUN node .\src\index.js
expose 80
CMD /usr/sbin/apache2ctl -D FOREGROUND