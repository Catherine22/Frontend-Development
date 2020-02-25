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

`async`/`await` syntax

E.g. React Native `fetch`

```Javascript
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
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
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
```

## Popular JS Frameworks

For whatever framework you are using, core elements to build a web app are HTML, CSS and Javascript.  
Frameworks help you better integrate with the processing language.

### Angular

### React

### Vue.js

1.  [Basics]
2.  [router]

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

[Nuxt.js demo]

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
-   Use AMP components to improve first visit performance.

For more information, see [AMP](#amp)

### Service Workers

-   Client side proxy written in JavaScript.
-   Cache assets locally.

### Lighthouse

-   To trail PWA, there is a tool called Lighthouse built in Chrome dev tools.
-   Lighthouse reports how well your site or app is doing in terms of performance, accessibility, security, SEO and PWA features.
-   Improve development cycle: Code and Test - Lighthouse - Debug - Lighthouse - Code and Test - ...

## AMP

AMP, Accelerated Mobile Pages.

## Tooling and Useful Dependencies

### Storybook

A tool to manage your UI components, make it easier to share components between web apps.

### Verdaccio

A lightweight private npm proxy registry to help you build your private npm registry.

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
[basics]: Vue/vue-essentials
[router]: Vue/vue-router
[nuxt.js demo]: Vue/nuxt-fundamentals
[verdaccio]: https://verdaccio.org/
[javascript tutorials]: JavaScript/README.md
[google javascript style guide]: https://google.github.io/styleguide/jsguide.html
[rwa gallery]: https://responsive-jp.com/
