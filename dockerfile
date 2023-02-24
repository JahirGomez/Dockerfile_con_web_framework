FROM node:18-alpine
MAINTAINER jahirgomez jahirgomez1714@gmail.com
WORKDIR /src/index
COPY package.json .
COPY index.js .
RUN npm install
EXPOSE 80
CMD ["npm", "start"]