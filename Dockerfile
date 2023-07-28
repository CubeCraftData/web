FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

FROM nginx:1.25.0-alpine AS prod

WORKDIR /app

COPY --from=build /app/dist .
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080