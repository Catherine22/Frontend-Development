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

## [Lesson 4](http://huziketang.mangojuice.top/books/react/lesson4)
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

## [Lesson 5](http://huziketang.mangojuice.top/books/react/lesson5)
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson5/src/App.js)
My first React app, follow the [docs](https://reactjs.org/docs/create-a-new-react-app.html)     
```
$npx create-react-app APP_NAME
```

```
$cd APP_NAME
$npm start
```

You might need to run ```$npm install``` or ```$yarn install``` to download node_modules if you clone code from GitHub

## [Lesson 6](http://huziketang.mangojuice.top/books/react/lesson6)     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson6/src/App.js)       
Learn JSX and ```ReactDOM.render```

Exercise:
```javascript
class App extends Component {
    renderContent(text) {
        return (
            <h1>{text}</h1>
        );
    }

    render() {
        return (
            <header>
                {this.renderContent('I am h1')}
            </header>
        );
    }
}
```

## [Lesson 7](http://huziketang.mangojuice.top/books/react/lesson7)     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson7/src/App.js)       
JSX example     
```javascript
class App extends Component {
    renderLink() {
        return (
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        );
    }

    render() {
        let word = 'JS property';
        let showLink = true;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        I am a {word}
                    </p>
                    <p>
                        I am a {
                        function () {
                            return 'JS function';
                        }()
                    }
                    </p>
                    {showLink ? this.renderLink() : null}
                </header>
            </div>
        );
    }
}
```

Exercise1:
```javascript
class App extends Component {

    getNotificationsCount() {
        return Math.floor(Math.random() * 4); // 0~3
    }

    render() {
        let notifications = this.getNotificationsCount();
        return (
            <div>
                {notifications > 0 ?
                    <span>有{notifications}条未读消息</span> :
                    <span>没有未读消息</span>
                }
            </div>
        );
    }
}
```
Or
```javascript
class App extends Component {

    getNotificationsCount() {
        return Math.floor(Math.random() * 4); // 0~3
    }

    renderNotificationText(notifications) {
            if (notifications > 0) {
                return (<span>有{notifications}条未读消息</span>);
            } else {
                return (<span>没有未读消息</span>);
            }
        }
        
    render() {
        let notifications = this.getNotificationsCount();
        return (
            <div>
                {this.renderNotificationText(notifications)}
            </div>
        );
    }
}
```

Exercise2:
```javascript
class App extends Component {
    render() {
        const title = <h1 className='title'>ScriptOJ</h1>;
        const page = <div className='content'>{title}</div>;
        return (
            <div>
                {page}
            </div>
        );
    }
}
```

## [Lesson 8](http://huziketang.mangojuice.top/books/react/lesson8)     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson8/src/App.js)       

Exercise        
```javascript
class App extends Component {
    render() {
        return (
            <House/>
        );
    }
}

class House extends Component {
    render() {
        return (
            <header>
                <h1>House</h1>
                <Room owner='Thomas'>Room</Room>
                <Room owner='Richard'>Room</Room>
                <Bathroom/>
                <Man/>
                <Dog/>
            </header>
        );
    }
}

class Room extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.owner ? `${this.props.owner}'s` : ''} Room</h2>
            </div>
        );
    }
}

class Bathroom extends Component {
    render() {
        return (
            <div>
                <h2>Bathroom</h2>
            </div>
        );
    }
}

class Man extends Component {
    render() {
        return (
            <div>
                <h3>Man</h3>
            </div>
        );
    }
}

class Dog extends Component {
    render() {
        return (
            <div>
                <h3>Dog</h3>
            </div>
        );
    }
}
```

# Reference
[React.js 小书](http://huziketang.mangojuice.top/books/react/)
