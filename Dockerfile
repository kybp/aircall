FROM node:16.15-alpine AS build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
RUN yarn

COPY webpack.config.js .babelrc ./
COPY public public/
COPY src src/

RUN yarn run build

FROM nginx

COPY --from=build /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/
