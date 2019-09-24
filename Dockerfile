FROM node:10.15.3

WORKDIR /app

COPY . /app/

RUN npm install