FROM node:latest
MAINTAINER jahirgomez jahirgomez1714@gmail.com
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "start"]