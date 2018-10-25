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

[Exercise](http://scriptoj.mangojuice.top/problems/1)     
在页面上增加一个 id 为 root 的 <div> 元素。然后请你完成一个 renderContent 函数，这个函数会把传入的任意字符串都包装到一个 <h1> 元素中并且渲染到页面上。     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson6/src/Exercise.js)   

## [Lesson 7](http://huziketang.mangojuice.top/books/react/lesson7)     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson7/src/App.js)   

[Exercise1](http://scriptoj.mangojuice.top/problems/2)        

使用 React.js 构建一个未读消息组件 ```Notification```。        
通过 ```getNotificationsCount()``` 来获取未读消息的数量 ，如果有未读消息 ```N``` 条，而且 ```N > 0```，那么 ```Notification``` 组件渲染显示：     
```<span>有(N)条未读消息</span>```        
否则显示：       
```<span>没有未读消息</span>```       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson7/src/Exercise1.js)     

[Exercise2](http://scriptoj.mangojuice.top/problems/3)        
用 JSX 完成两个变量的定义：        
第一个变量 title 为一个具有类名为 title 的 <h1> 元素，其内容为 ScriptOJ；     
第二个变量 page 为一个具有类名为 content 的 <div> 元素，将之前定义的 title 变量插入其中作为它的内容。       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson7/src/Exercise2.js)   

## [Lesson 8](http://huziketang.mangojuice.top/books/react/lesson8)     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson8/src/App.js)       

[Exercise](http://scriptoj.mangojuice.top/problems/4)        
一个房子里面有一个房间和一个洗手间，房间里面有一个人和两条狗。     
请你完成组件：```House```，```Room```，```Bathroom```，```Man```，```Dog```，它们的最外层都用 ```div``` 标签包裹起来，类名分别为：```house```，```room```，```bathroom```，```man```，```dog```。     
组件的实现应该具有上述的嵌套关系。       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson8/src/Exercise.js)    


## [Lesson 9](http://huziketang.mangojuice.top/books/react/lesson9)     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson9/src/App.js)       

[Exercise](http://scriptoj.mangojuice.top/problems/5)   
有一只狗，不允许别人摸它，一旦摸它就会叫，然后就跑了。     
完成 ```Dog``` 组件，当用户点击的时候会执行自身的 ```bark``` 和 ```run``` 方法。       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson9/src/Exercise.js)       

## [Lesson 10](http://huziketang.mangojuice.top/books/react/lesson10)     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson10/src/LikeButton.js)       

When we call ```setState```, the state won't be changed instantly. E.g. We bind a ```_onLikeButtonPressed``` function to a button,      
Initialise the state        
```javascript
this.state = {
    'isLike': false
}
```      
```javascript
_onLikeButtonPressed() {
    console.log('step1 like:', this.state.isLike);
    this.setState({isLike: !this.state.isLike});
    console.log('step2 count:', this.state.isLike);
}
```

When the button is clicked, the ```state``` should have been updated, we expected that it will print different results on step1 and step2. (step1 isLike: false step2 isLike: true)       
However, we will get log:     
```
step1 isLike: false
step2 isLike: false
```

In fact, the ```state``` won't update itself immediately.       

### last state
React Native will keep the last state even if ```state``` isn't updated yet.        
In order to get the previous state, here is an example. We bind a ```_onLikeButtonPressed``` function to a button,      
Initialise the state             
```javascript
this.state = {
    'count': 0
}
```
```javascript
_onLikeButtonPressed() {
    console.log('count:', this.state.count);
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
}
```
We expect that count will be increased like 0, 2, 4... , but it prints logs that        
```javascript
count: 0
count: 1
count: 2
```

Because the latest ```state``` hasn't been saved yet, to get the latest ```state```, we use arrow functions to retrieve it      
```javascript
_onLikeButtonPressed() {
    console.log('count:', this.state.count);
    this.setState({count: this.state.count + 1});
    this.setState((prevState) => {
        return {count: prevState.count + 1};
    });
}
```
**It's noticeable that even though we have called ```setState``` a couple of times, the ```render()``` method will be called once.**    

[Exercise](http://scriptoj.mangojuice.top/problems/6)   
有一只狗，不允许别人摸它，一旦摸它就会叫，然后就跑了；这只狗跑一段时间（20~50ms）以后就会停下来，也不叫了。       
完成 ```Dog``` 组件，当用户点击的时候会执行自身的 ```bark``` 和 ```run``` 方法。给这个 ```Dog``` 组件加上状态 ```isRunning``` 和 ```isBarking```，在进行相应的动作的时候设置为 ```true```，停下来的时候设置为 ```false```。        
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson10/src/Exercise.js)   

# Reference
[React.js 小书](http://huziketang.mangojuice.top/books/react/)
