# Front-end-warm-up

## JavaScript

### [JS Programming Language](https://github.com/Catherine22/Front-end-warm-up/tree/master/JavaScript)

### [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

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

ES2017 style

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

## React

### [React Tutorial](https://github.com/Catherine22/Front-end-warm-up/tree/master/React)

## React Native

### [Fetch data from the Internet via axios](https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/)

-   The third party reference (axios)
-   ListView

### [Login via Email](https://github.com/Catherine22/Front-end-warm-up/blob/master/React%20native/auth/)

-   Firebase OAuth

### [Redux Introduction](https://github.com/Catherine22/Front-end-warm-up/blob/master/React%20native/tech_stack/)

-   Basic Redux

### [Navigating screens + Redux ](https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/manager/)

-   Navigation via react-native-router-flux
-   Redux + redux-thunk
-   Firebase OAuth

### [Android Oreo updates ](https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/Oreo)

-   New features (Firebase cloud messaging, notification channels, foreground services, JobScheduler) on Android Oreo devices
-   React Native communicates with Android Native Modules
