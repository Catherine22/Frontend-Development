# The Web Developer Bootcamp

## Navigation

-   [Basis](#basis)
    -   [Environment and Tools](#environment-and-tools)
    -   [URL Structure](#url-structure)
    -   [SEO](#seo)
    -   [UX](#ux)
    -   [Redirect](#redirect)
    -   [Reactive Web Applications](#reactive-web-applications)
-   [JavaScript](#javaScript)
    -   [Style Guide](#style-guide)
    -   [ECMAScript](#ecmaScript)
-   [Popular Frontend Frameworks](#popular-frontend-framework)
    -   [Angular](#angular)
    -   [React](#react)
    -   [Vue.js](#vuejs)
        -   [Useful UI Dependencies](#useful-ui-dependencies)
        -   [Nuxt.js](#nuxtjs)
-   [Design Patterns](#design-patterns)
    -   [CDD](#cdd)
-   [Progressive Web App](#progressive-web-app)
    -   [Service Workers](#service-workers)
    -   [Lighthouse](#lighthouse)
-   [AMP](#amp)
-   [Tooling and Useful Dependencies](#tooling-and-useful-dependencies)
    -   [Storybook](#storybook)
    -   [Verdaccio](#verdaccio)
-   [Security](#security)
    -   [OWASP Top 10 Web Application Security Risks](#owasp-top-10-web-application-security-risks)
-   [Testing](#testing)
    -   [Unit Testing](#unit-testing)
    -   [End-to-end Testing](#end-to-end-testing)
-   [Deployment](#deployment)
    -   [Vue.js Deployment](#vuejs-deployment)

## Basis

### Environment and Tools

1. Chrome
2. Node.js
3. Visual Studio Code
4. Visual Studio Code extensions (Eslint, HTML Snippets, Prettier, Copy Relative Path, TabNine, etc.)

### URL Structure

[Does URL Structure Affect SEO? Here’s What Google Thinks]

### SEO

[SEO Starter Guide]

### UX

1. [Why rounding odd font sizes to even?]
2. [The 8-Point Grid System]
3. Image size
    - Your image size should not be larger than for example, 1200px, it depends on laptops and PCs' screen resolution.
4. [HTML5 Semantic Elements]

### Redirect

[Is there an advantage to using rel="canonical" over a 301 redirect?]

> If you have access to header modification, use 301, if you don't, then use rel=canonical.

### Reactive Web Applications

[RWA Gallery]

## JavaScript

For more information, see [JavaScript Tutorials]

### Style Guide

For more information, see [Google JavaScript Style Guide]

### ECMAScript

-   ES6

[ES6 Overview](http://es6-features.org/#Constants)

-   ES2017

Replace Promise chain to `async`/`await`

E.g. `fetch` API

```Javascript
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => {
      // response.ok: status in the range 200-299
      if (!response.ok) throw response.statueText;
      return response.json();
    })
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}
```

`fetch` in ES2017 style

```Javascript
async function getMoviesFromApi() {
  try {
    let response = await fetch(
      'https://facebook.github.io/react-native/movies.json',
    );
    if (!response.ok) throw response.statueText;

    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
```

E.g. Add a event listener to window

```Javascript
window.addEventListener('load', (event: any) => {
    event.waitUntil(navigator.serviceWorker.register('/service-worker.js')
    .then(register => {
      console.log('Registered!');
    }).catch(error => {
      console.warn(error);
    })
});
```

In ES2017 style

```Javascript
window.addEventListener('load', (event: any) => {
    try {
        const register = async () => {
            await navigator.serviceWorker.register('/service-worker.js');
        };
        event.waitUntil(register());
    } catch (error) {
        console.warn(error);
    }
});
```

## Popular JS Frameworks

For whatever framework you are using, core elements to build a web app are HTML, CSS and Javascript.  
Frameworks help you better integrate with the processing language.

### Angular

### React

### Vue.js

Vue.js demos:

1.  [vue-essentials]
2.  [vue-router]
3.  [nuxt-fundamentals]
4.  [vue-pwa]

#### Useful UI Dependencies

1. [APEXCHARTS.JS]
2. [Element UI]

#### Nuxt.js

A Vue.js framework

1. Server side rerendering
2. Pre-rerendering
3. Better performance
4. SEO friendly
5. Code splitting

Demo: [nuxt-fundamentals]

## Design Patterns

### CDD

Aka Component-Driven Development.  
A state-of-the-art design pattern for Vue.js

## Progressive Web App

Research says, 40% of users bounce from sites that take longer than **3 seconds** to load.

-   PWA provides:
    1. Reliable: Fast loading, work offline and on flaky networks.
    2. Fast: Smooth animation, jank-free scrolling and seamless navigation.
    3. Engaging: Launch from the home screen and send push notifications.
-   PWA speeds up website loading by leveraging service workers to cache assets, but it cannot handle the first visit (where there is no cache).
-   `self::addEventListener`: Inside the service worker, self refers to the service worker itself, otherwise, it refers to the window object.
-   Use AMP components to improve first visit performance.
-   Precaching: Download and cache files when first run (then always use the cached files).
-   To log if user goes with pwa, you can set up a specific `"start_url` in `public/manifest.json`

Demo: [vue-pwa]

### Service Workers

-   Client side proxy written in JavaScript between your web app and the outside.
-   Cache assets locally.
-   Script:
    -   Lifecycle: install, activate
    -   Intercept network requests: fetch
    -   Receive push message: push
    -   Receive data when idle: sync
-   Service Worker has a lifecycle independently

![sw](screenshots/sw.png)

### Lighthouse

-   To trail PWA, there is a tool called Lighthouse built in Chrome dev tools.
-   Lighthouse reports how well your site or app is doing in terms of performance, accessibility, security, SEO and PWA features.
-   Improve development cycle: Code and Test - Lighthouse - Debug - Lighthouse - Code and Test - ...

## AMP

AMP, Accelerated Mobile Pages.

## CORS

Cross Origin Resource Sharing.

-   Origin: A combination of scheme, host and port. E.g. "http://www.example.com" has scheme "http", port "80" and the host is "www.example.com".
-   In the previous example, if you visit the website with "https", it is a different origin.
-   CORS enables to fetch resources outside from your app's origin.
-   Generally, you can load most resources from different origin, such as images, scripts, video/audio, embeds.
-   You CANNOT load xml and JSON from different origin, unless you grant the permission.
-   Here is the CORS implementation in the nutshell:
    -   Add origin header on request
    -   Server sends `access-control-allow-origin` if allowed
    -   If server does not support CORS:

```Javascript
fetch('https://foo.com/data.json'), {
  mode: 'no-cors' // 'cors' by default
}.then(response => {
  // ...
}).catch(error => {
  // ...
})
```

## Tooling and Useful Dependencies

### Storybook

A tool to manage your UI components, make it easier to share components between web apps.

### Verdaccio

A lightweight private npm proxy registry to help you build your private npm registry.

## Security

## OWASP Top 10 Web Application Security Risks

1. Injection
2. Broken authentication
3. Sensitive data exposure
4. XML external entities
5. Broken access control
6. Security misconfiguration
7. cross-site scripting XSS
8. Insecure deserialization
9. Known vulnerabilities
10. Insufficient logging & monitoring

## Testing

### Unit Testing

-   Popular frameworks: Jest or Mocha

### End-to-end Testing

-   Popular frameworks: Cypress, Selenium

## Deployment

### Vue.js Deployment

To build a containerised web app with Nginx, you need to:

1. Add build commands in package.json

```JSON
{
    "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "test:unit": "vue-cli-service test:unit",
        "test:e2e": "vue-cli-service test:e2e",
        "lint": "vue-cli-service lint"
    }
}
```

2. Add webpack config in vue.config.js if you need
3. Add nginx.conf
4. Create Dockerfile and dockerignore

Install Node.js -> Install dependencies -> Run unit testing and linter -> Build node.js app -> Install Nginx -> Configure Nginx

```Dockerfile
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .

RUN npm run test:unit
RUN npm run lint
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
```

dockerignore

```
**/node_modules
**/dist
```

For more information, see [vue-pwa]

[why rounding odd font sizes to even?]: https://ux.stackexchange.com/questions/129973/why-rounding-odd-font-sizes-to-even
[the 8-point grid system]: https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632
[html5 semantic elements]: https://guide.freecodecamp.org/html/html5-semantic-elements/
[does url structure affect seo? here’s what google thinks]: https://seopressor.com/blog/url-structure-affect-seo/
[seo starter guide]: https://support.google.com/webmasters/answer/7451184?hl=en
[is there an advantage to using rel="canonical" over a 301 redirect?]: https://www.youtube.com/watch?v=zW5UL3lzBOA
[apexcharts.js]: https://apexcharts.com/
[element ui]: https://element.eleme.io/#/en-US
[js programming language]: JavaScript
[fetch data from the internet via axios]: React%20native/albums/
[login via email]: React%20native/auth/
[redux introduction]: React%20native/tech_stack/
[navigating screens + redux]: React%20native/manager/
[android oreo updates]: React%20native/Oreo
[vue-essentials]: Vue/vue-essentials
[vue-router]: Vue/vue-router
[nuxt-fundamentals]: Vue/nuxt-fundamentals
[verdaccio]: https://verdaccio.org/
[javascript tutorials]: JavaScript/README.md
[google javascript style guide]: https://google.github.io/styleguide/jsguide.html
[rwa gallery]: https://responsive-jp.com/
[vue-pwa]: Vue/vue-pwa
