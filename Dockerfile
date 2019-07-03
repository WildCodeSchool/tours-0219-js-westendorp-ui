# build
FROM node:10.15.3 AS builder
WORKDIR /workdir
COPY . /workdir
RUN yarn install
RUN yarn build:ssr

# build run
FROM node:lts
WORKDIR /workdir
COPY --from=builder /workdir/dist /workdir
COPY --from=builder /workdir/package.json /workdir
COPY --from=builder /workdir/yarn.lock /workdir
RUN yarn install --prod

EXPOSE 8080
CMD [ "node", "server.js" ]
