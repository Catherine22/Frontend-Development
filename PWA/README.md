# PWA Sample App

## Configuration

1. Add [icons](img/icons)

2. In each html file

```HTML
<html lang="en">
    <head>
        <link rel="manifest" href="/manifest.json" />
        <!--iOS icon on Home screen-->
        <link rel="apple-touch-icon" href="/img/icons/icon-96x96.png" />
        <!--iOS status bar colour-->
        <meta name="apple-mobile-web-app-status-bar-style" content="#ffe9d2" />
    </head>
</html>
```

3. In manifest.json

-   display: How do you present your PWA in mobile phone
    -   `standalone`: To make your PWA looks like a native app.
    -   `browser`: Open your PWA in browser
-   background_color:
-   theme_color:
-   orientation: To launch the PWA in what screen orientation
-   icons: Your desktop icons on Android devices

## Reference

[PWA Tutorial for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7)
