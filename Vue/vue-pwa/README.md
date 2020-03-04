# vue-pwa

## Development

1. Install dependencies

```shell
$yarn install
```

2. Start the app

```shell
$yarn serve
```

## Deployment

1. Build to an image

```shell
$docker build . -t 123987109832/vue-pwa:release-latest
```

2. Run the image

```shell
$docker run -d -p 80:80  123987109832/vue-pwa:release-latest
```

3. Open `localhost` in your browser

Docker Repo: https://hub.docker.com/repository/docker/123987109832/vue-pwa
