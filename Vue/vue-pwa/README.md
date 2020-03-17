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

1. Build to an image (using Dockerfile.prod for production and Dockerfile.staging for staging)

```shell
$docker build -f Dockerfile.prod -t 123987109832/vue-pwa:release-latest .
```

2. Run the image

```shell
$docker run -d -p 80:80  123987109832/vue-pwa:release-latest
```

3. Open `localhost` in your browser

[DockerHub](https://hub.docker.com/repository/docker/123987109832/vue-pwa)
