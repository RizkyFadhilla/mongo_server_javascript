FROM node:latest

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD [ "nodemon", "app.js" ]