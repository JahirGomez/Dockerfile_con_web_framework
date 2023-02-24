FROM node:12
WORKDIR /usr/src/index
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]