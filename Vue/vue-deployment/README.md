# vue-deployment

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

## Deployment

1. Build to an image

```shell
$docker build . -t vue-deployment:release-latest
```

2. Run the image

```shell
$docker run -d -p 80:80  vue-deployment:release-latest
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
