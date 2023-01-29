FROM node:16

WORKDIR /usr/app

COPY package.json package-lock.json /usr/app/

RUN npm ci --silent

COPY . .

CMD npm start