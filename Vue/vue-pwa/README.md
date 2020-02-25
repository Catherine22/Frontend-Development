# vue-pwa

## Deployment

1. Build to an image

```shell
$docker build . -t 123987109832/vue-pwa:release-latest
```

2. Run the image

```shell
$docker run -d -p 80:80  123987109832/vue-pwa:release-latest
```

Docker Repo: [https://hub.docker.com/repository/docker/123987109832/vue-pwa]
