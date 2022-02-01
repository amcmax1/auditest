FROM node:14.17.1 as build
ARG BUILD_CONTEXT

WORKDIR /base
COPY package.json .
COPY yarn.lock .
COPY ./packages/$BUILD_CONTEXT/package.json packages/$BUILD_CONTEXT/
RUN yarn install
COPY ./packages/$BUILD_CONTEXT packages/$BUILD_CONTEXT
RUN yarn build:$BUILD_CONTEXT
EXPOSE 3333
ENTRYPOINT ["yarn", "start"]
