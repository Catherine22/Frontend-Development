## [Lesson 2](http://huziketang.mangojuice.top/books/react/lesson2)
```html
<script>
    // Html loaded
    window.onload = function () {
        let likeBtn = document.querySelector('.like-btn');
        let likeBtnText = likeBtn.querySelector('.like-text');
        likeBtn.addEventListener('click', () => {
            if (likeBtnText.innerHTML === 'Like'){
                likeBtnText.innerHTML = 'Cancel';
            } else {
                likeBtnText.innerHTML = 'Like';
            }
        }, false);
    };
</script>
```

Update ```addEventListener```       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson2_1.html)
```html
<script>
    // Html loaded
    window.onload = function () {
        function onBtnClick() {
            if (likeBtnText.innerHTML === 'Like'){
                likeBtnText.innerHTML = 'Cancel';
            } else {
                likeBtnText.innerHTML = 'Like';
            }
        }
        let likeBtn = document.querySelector('.like-btn');
        let likeBtnText = likeBtn.querySelector('.like-text');
        likeBtn.addEventListener('click', () => {
            onBtnClick();
        }, false);
    };
</script>
```

Refactor ```LikeButton```
```html
<script>
    // Html loaded
    window.onload = function () {
        const createDOMFromString = (domString) => {
            const div = document.createElement('div');
            div.innerHTML = domString;
            return div;
        };

        class LikeButton {

            render() {
                this.element = createDOMFromString(
                    `<button class='like-btn'>
                         <span class='like-text'>Like</span>
                         <span>👍</span>
                    </button>`
                );
                this.element.addEventListener('click', () => {
                    let likeBtn = this.element.querySelector('.like-btn');
                    let likeBtnText = likeBtn.querySelector('.like-text');
                    if (likeBtnText.innerHTML === 'Like') {
                        likeBtnText.innerHTML = 'Cancel';
                    } else {
                        likeBtnText.innerHTML = 'Like';
                    }
                }, false);
                return this.element;
            }
        }

        let wrapper = document.querySelector('.wrapper');
        let likeBtn = new LikeButton();
        wrapper.appendChild(likeBtn.render())
    };
</script>
```

Update ```addEventListener```       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson2_2.html)
```html
<script>
    // Html loaded
    window.onload = function () {
        const createDOMFromString = (domString) => {
            const div = document.createElement('div');
            div.innerHTML = domString;
            return div;
        };

        class LikeButton {
            onBtnClick() {
                let likeBtn = this.element.querySelector('.like-btn');
                let likeBtnText = likeBtn.querySelector('.like-text');
                if (likeBtnText.innerHTML === 'Like') {
                    likeBtnText.innerHTML = 'Cancel';
                } else {
                    likeBtnText.innerHTML = 'Like';
                }
            }

            render() {
                this.element = createDOMFromString(
                    `<button class='like-btn'>
                         <span class='like-text'>Like</span>
                         <span>👍</span>
                    </button>`
                );
                this.element.addEventListener('click', this.onBtnClick.bind(this), false);
                return this.element;
            }
        }

        let wrapper = document.querySelector('.wrapper');
        let likeBtn = new LikeButton();
        wrapper.appendChild(likeBtn.render())
    };
</script>
```

## [Lesson 3](http://huziketang.mangojuice.top/books/react/lesson3)
Update views automatically while the state changes      
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson3.html)
```html
<script>
    // Html loaded
    window.onload = function () {
        const createDOMFromString = (domString) => {
            const div = document.createElement('div');
            div.innerHTML = domString;
            return div;
        };

        class LikeButton {

            constructor() {
                this.state = {isLike: false};
            }

            setState(state) {
                if (this.state !== state) {
                    this.state = state;
                    // re-render the view
                    let prevElement = this.element;
                    this.element = this.render();
                    if (this.onStateChange) {
                        this.onStateChange(prevElement, this.element);
                    }
                }
            }

            onBtnClick() {
                this.setState({isLike: !this.state.isLike});
            }

            render() {
                if (this.state.isLike) {
                    this.element = createDOMFromString(
                        `<button class='like-btn'>
                             <span class='like-text'>Cancel</span>
                             <span>👍</span>
                         </button>`
                    );
                } else {
                    this.element = createDOMFromString(
                        `<button class='like-btn'>
                             <span class='like-text'>Like</span>
                             <span>👍</span>
                         </button>`
                    );
                }
                this.element.addEventListener('click', this.onBtnClick.bind(this), false);
                return this.element;
            }
        }

        let wrapper = document.querySelector('.wrapper');
        let likeBtn = new LikeButton();
        wrapper.appendChild(likeBtn.render());
        likeBtn.onStateChange = (prevElement, currentElement) => {
            wrapper.removeChild(prevElement);
            wrapper.appendChild(currentElement);

        }
    };
</script>
```

Define a component class to keep those functions and properties     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson4_1.html)
```javascript
class Component {
    setState(state) {
        if (this.state !== state) {
            this.state = state;
            // re-render the view
            let prevElement = this.element;
            this.element = this._renderDOM();
            if (this.onStateChange) {
                this.onStateChange(prevElement, this.element);
            }
        }
    }
    
    createDOMFromString(domString) {
        const div = document.createElement('div');
        div.innerHTML = domString;
        return div;
    };
    
    // Private method starts from '_'
    _renderDOM() {
        this.element = this.createDOMFromString(this.render());
        if (this.onClick) {
            this.element.addEventListener('click', this.onClick.bind(this));
        }
        return this.element;
    }
}
```

A user-defined component LikeButton which extends Component to re-render views automatically by calling ```setState()```
```javascript
class LikeButton extends Component {
    constructor() {
        super();
        this.state = {isLike: false};
    }
    
    onClick() {
        this.setState({isLike: !this.state.isLike});
    }
    
    render() {
        if (this.state.isLike) {
            return `<button class='like-btn'>
                        <span class='like-text'>Cancel</span>
                        <span>👍</span>
                     </button>`;
        } else {
            return `<button class='like-btn'>
                        <span class='like-text'>Like</span>
                        <span>👍</span>
                    </button>`;
        }
    }
}
```

Initialise views
```javascript
const mount = (component, wrapper) => {
    wrapper.appendChild(component._renderDOM());
    component.onStateChange = (prevElement, currentElement) => {
        wrapper.removeChild(prevElement);
        wrapper.appendChild(currentElement);
    }
};

let wrapper = document.querySelector('.wrapper');
mount(new LikeButton(), wrapper);
```
# Reference
[React.js 小书](http://huziketang.mangojuice.top/books/react/)
