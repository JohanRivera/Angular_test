# Primera etapa: Compilación
FROM node:16-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda etapa
FROM nginx:1.23.3-alpine

COPY --from=build-step /app/dist/angular-test /usr/share/nginx/html