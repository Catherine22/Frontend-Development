# nuxt-fundamentals

> My luminous Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Deployment

### Server-Side Rendered Deployment

1. Containerization

```bash
$ docker build -t 123987109832/vuejs-nuxtjs-web-app:latest .
```

2. Execution

```bash
$ docker run -p 80:3000 123987109832/vuejs-nuxtjs-web-app:release-latest
```

[DockerHub](https://hub.docker.com/repository/docker/123987109832/vuejs-nuxtjs-web-app)
