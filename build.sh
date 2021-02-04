#!/bin/bash

cd api
npm install
cd ..

cd client
npm install && npm run build
cd ..

cd api
node app.js