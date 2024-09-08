FROM node:18-alpine

WORKDIR /usr/src/app

COPY public/ ./public
COPY src/ ./src

COPY package.json ./
COPY environment.d.ts ./
COPY tsconfig.json ./

RUN npm install

CMD ["npm", "start"]