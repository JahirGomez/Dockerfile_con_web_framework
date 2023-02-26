FROM ubuntu:latest
MAINTAINER jahirgomez jahirgomez1714@gmail.com
RUN apt-get update
RUN apt-get -y install nodejs npm
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 80
RUN node .\src\index.js