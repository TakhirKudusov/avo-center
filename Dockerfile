FROM node:16-alpine

ARG NPM_TOKEN  

WORKDIR /apps/avo-token-site

COPY . ./

RUN npm i

CMD ["npm", "start"]

EXPOSE 3000