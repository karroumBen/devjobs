FROM node:20-bookworm-slim AS build

WORKDIR /usr/src/app

COPY package.json yarn.lock .yarnrc.yml ./

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable \
  && corepack prepare yarn@4.5.0 --activate \
  && yarn install --immutable

COPY . .

ARG REACT_APP_BASE_URL=/api
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL
ENV CI=false

RUN yarn build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
