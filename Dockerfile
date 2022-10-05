FROM node:16-alpine

WORKDIR /dist/index


ENV PORT=4000

COPY package*.json ./


RUN npm install




COPY . .


CMD [ "node" , "index.js" ]