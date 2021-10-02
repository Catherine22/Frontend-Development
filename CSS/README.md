# CSS

## Table of Contents

- [CSS](#css)
  - [Table of Contents](#table-of-contents)
  - [Implementing CSS](#implementing-css)
  - [CSS Selectors](#css-selectors)
    - [Multiple selectors](#multiple-selectors)
    - [Nested selectors](#nested-selectors)
  - [Fonts](#fonts)
    - [Font units](#font-units)
  - [Colours](#colours)

## Implementing CSS

Three ways to implement CSS are shown below:

style.css

```CSS
h3 {
    color: blue;
}

```

index.html

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>My playground</title>
        <!-- Internal CSS -->
        <style>
            h2 {
                color: green;
            }
        </style>
        <!-- External CSS -->
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <!-- (1) Inline CSS (not recommended) -->
        <h1 style="color: red">Heading 1</h1>
        <!-- (2) Internal CSS -->
        <h2>Heading 2</h2>
        <!-- (3) External CSS -->
        <h3>Heading 3</h3>
    </body>
</html>

```

## CSS Selectors

You can decorate your HTML tags using `id`, `class` or a global style of specific tags. `id` is used for unique identifiers, which is not recommended to link to CSS styles.

Example 1, using `id`.

```HTML
<h2 id="red-secondary">Welcome</h2>
```

Your CSS styling can be either `#id` or `tag#id`

```CSS
#secondary-heading {
    color: red;
}
```

```CSS
h2#secondary-heading {
    color: red;
}
```

Example 2, using `class`

```HTML
<h2 class="primary-heading">About</h2>
```

```CSS
.primary-heading {
    color: blue;
}
```

Example 3, global settings

```HTML
<h2>Contact</h2>
```

```CSS
h2 {
    color: green;
}
```

### Multiple selectors

```CSS
#welcome, #about, section {
    border: 1px solid #ccc;
    padding: 8px;
    margin-bottom: 4px;
}
```

```HTML
<section id="welcome">
    <h2>Welcome<h2>
    <p></p>
</section>
<section id="about">
    <h2>About<h2>
    <p></p>
</section>
<section id="contact">
    <h2>Contact<h2>
    <p></p>
</section>
```

### Nested selectors

Nested selectors select elements inside other elements.
E.g. You want to select the `<p>` tag inside the `section` tag.

```HTML
<section id="about">
    <h2>About<h2>
    <p></p>
</section>
```

Your CSS file will be as follows:

```CSS
#about p {
    color: gray;
}
```

## Fonts

Using [web-safe fonts] or you will need to import extra font resources

1.  Web-safe fonts

Add a font family to your CSS file.

```CSS
body {
    font-family: Arial, Helvetica, sans-serif;
}
```

2.  Google fronts

Link font in your HTML file.

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
        />
    </head>
    <body>
    </body>
</html>

```

In your, CSS file set the font family.

```CSS
body {
    font-family: 'Roboto', sans-serif;
}
```

### Font units

The standard font size by default is 16 px. Here are standard CSS units:

-   `px`
-   `em`: To size of parent element. E.g., 1.5 em font-size is 1.5 \* its' parent's font-size
-   `rem`: To size of root element. E.g., 1.5 em font-size is 1.5 \* the root element's font-size
-   `vw`: To 1% of the viewport width
-   `vh`: To 1% of the viewport height

## Colours

1. colour name

```CSS
h1 {
    color: red;
}
```

2. RGB

```CSS
h1 {
    color: rgb(255, 255, 255);
}
```

3. Hex

```CSS
h1 {
    color: #c3c3c3;
}
```

[web-safe fonts]: https://www.w3schools.com/cssref/css_websafe_fonts.asp
