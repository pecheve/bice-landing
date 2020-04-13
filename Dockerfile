FROM node:10.19-alpine AS angular
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

FROM nginx:1.16.0-alpine
COPY --from=angular /app/dist/landing-go-bice /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 3050
