FROM node:15.6.0-alpine3.10

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 4444

CMD ["node", "app.js"]