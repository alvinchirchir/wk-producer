
FROM node:alpine 

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY **/package.json **/package-lock.json ./
COPY **/tsconfig.json **/tsconfig-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main"]