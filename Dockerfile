FROM node:15.6.0-alpine3.10

WORKDIR /usr/src/app

COPY . .

RUN cd ./client && npm install && npm run build

RUN npm install

CMD ["node", "app.js"]
