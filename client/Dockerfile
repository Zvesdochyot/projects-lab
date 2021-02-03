FROM node:15.6.0-alpine3.10

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["http-server", "dist", "-p", "9000"]