FROM node:12.18.1-alpine

WORKDIR /usr/scr/app
COPY package*.json ./
RUN npm install --only=production
COPY ./src ./src
COPY ./videos ./videos
CMD npm start 