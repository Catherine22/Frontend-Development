# CSS

[A Modern CSS Reset]

## Table of Contents

- [CSS](#css)
  - [Table of Contents](#table-of-contents)
  - [Box Model](#box-model)
    - [Extrinsic Sizing vs Intrinsic Sizing](#extrinsic-sizing-vs-intrinsic-sizing)
    - [Areas of Box Model](#areas-of-box-model)
    - [Readings](#readings)
  - [References](#references)

## Box Model

### Extrinsic Sizing vs Intrinsic Sizing

By using extrinsic sizing, there is a limit of how much child content can add before it overflows out of the parent's bounds. For example, adding `width: 320px;` to a CSS component makes it extrinsically sized. The problem with the extrinsic sizing is that the child overflows outside of the parent's box if its content is too large for the parent.

```CSS
.parent {
	width: 400px;
	height: 400px;
}
```

Adding `width: min-content` to the parent tells the box only to be as wide as the intrinsic minimum width of its content so that the box can fit its content. Therefore, the browser determines the size of a box.

```CSS
.parent {
	  width: min-content;
	  height: min-content;
}
```

`min-content` is the smallest size of a box where its contents do not overflow outside the box. The `max-content` sizing keyword represents the intrinsic maximum width or height of the content. For text content, this means that the content will not wrap at all, even if it causes overflows [1].

### Areas of Box Model

The image below shows relevant CSS properties:

<iframe height="300" style="width: 100%;" scrolling="no" title="Areas of Box Model" src="https://codepen.io/catherine22-the-reactor/embed/YzxLwwZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/catherine22-the-reactor/pen/YzxLwwZ">
  Areas of Box Model</a> by Catherine (<a href="https://codepen.io/catherine22-the-reactor">@catherine22-the-reactor</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Read [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) carefully and compare `box-sizing: content-box;` and `box-sizing: border-box;`.

### Readings

-   [How do min-content and max-content work?]
-   [Box Model](https://web.dev/learn/css/box-model/)
-   [CodePen](https://codepen.io/catherine22-the-reactor/pen/dyzeorr?editors=0010)

## References

[Learn CSS]

[learn css]: https://web.dev/learn/css/
[how do min-content and max-content work?]: https://stackoverflow.com/questions/51285308/how-do-min-content-and-max-content-work
[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/max-content
[a modern css reset]: ./reset.css
