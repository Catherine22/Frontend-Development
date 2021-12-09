# docker-react

This repo demonstrates how to run a react app in development and production environments. All the changes and tests can be previewed in real-time during the development stage.
In this example, the docker container provides a Node.js environment and therefore, there is no need to install Node.js in the local machine.

## Development Phase

Run `docker-compose up` or `docker-compose up --build` to start the react app and execute tests. This docker-compose allows you to preview changes or tests during runtime.

## Production Phase

# docker-react

This repo demonstrates how to run a react app in development and production environments. All the changes and tests can be previewed in real-time during the development stage.
In this example, the docker container provides a Node.js environment and therefore, there is no need to install Node.js in the local machine.

## Development Phase

Run `docker-compose up` or `docker-compose up --build` to start the react app and execute tests. This docker-compose allows you to preview changes or tests during runtime.

## Production Phase

Build the react app first, and move static files to Nginx folder.

```bash
$ docker build -t YOUR_DOCKERHUB_ID/react-app:latest -f Dockerfile.prod .
```

Run the image.

```bash
$ docker run -p 3000:80 YOUR_DOCKERHUB_ID/react-app:latest
```
