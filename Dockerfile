FROM node:latest

WORKDIR /mongo_server_javascript

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

RUN npm install -g nodemon

COPY . .

CMD [ "nodemon", "app.js" ]