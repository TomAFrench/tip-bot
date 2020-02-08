FROM node:10-alpine

ENV MYSQL_HOST 'db'
ENV MYSQL_ROOT_PASSWORD 'supersecret'
ENV MYSQL_DATABASE 'tips'
ENV INFURA_URL wss://rinkeby.infura.io/ws/v3/
ENV BOT_USER ''
ENV DISCORD_TOKEN ''

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

CMD node /app/main.js