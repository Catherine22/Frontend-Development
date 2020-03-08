FROM node:latest as staging-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run lint
RUN npm run test
RUN npm run build:dev
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

FROM node:latest as prod-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run lint
RUN npm run test
RUN npm run build
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "run", "start"]