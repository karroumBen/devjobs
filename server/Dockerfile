FROM node:20-bookworm-slim

WORKDIR /usr/src/app

RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock .yarnrc.yml ./

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable \
  && corepack prepare yarn@4.5.0 --activate \
  && yarn install --immutable

COPY . .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "index.js"]
