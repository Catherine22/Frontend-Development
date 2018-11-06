# React code and tips
http://huziketang.mangojuice.top/books/react/   
![Part 1](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/part1.png)   
![Part 2](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/part2.png)   
![Part 3](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/part3.png)   

## [Lesson2](http://huziketang.mangojuice.top/books/react/lesson2)
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

## [Lesson3](http://huziketang.mangojuice.top/books/react/lesson3)
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

## [Lesson4](http://huziketang.mangojuice.top/books/react/lesson4)
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

## [Lesson5](http://huziketang.mangojuice.top/books/react/lesson5)     
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

## [Lesson6](http://huziketang.mangojuice.top/books/react/lesson6) Learn JSX and ```ReactDOM.render```          
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson6/src/App.js)       

[Exercise](http://scriptoj.mangojuice.top/problems/1)     
在页面上增加一个 id 为 root 的 ```<div>``` 元素。然后请你完成一个 renderContent 函数，这个函数会把传入的任意字符串都包装到一个 ```<h1>``` 元素中并且渲染到页面上。     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson6/src/Exercise.js)   

## [Lesson7](http://huziketang.mangojuice.top/books/react/lesson7) JSX     
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
第一个变量 title 为一个具有类名为 title 的 ```<h1>``` 元素，其内容为 ScriptOJ；     
第二个变量 page 为一个具有类名为 content 的 ```<div>``` 元素，将之前定义的 title 变量插入其中作为它的内容。       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson7/src/Exercise2.js)   

## [Lesson8](http://huziketang.mangojuice.top/books/react/lesson8) ```onClick```     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson8/src/App.js)       

[Exercise](http://scriptoj.mangojuice.top/problems/4)        
一个房子里面有一个房间和一个洗手间，房间里面有一个人和两条狗。     
请你完成组件：```House```，```Room```，```Bathroom```，```Man```，```Dog```，它们的最外层都用 ```div``` 标签包裹起来，类名分别为：```house```，```room```，```bathroom```，```man```，```dog```。     
组件的实现应该具有上述的嵌套关系。       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson8/src/Exercise.js)    


## [Lesson9](http://huziketang.mangojuice.top/books/react/lesson9)     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson9/src/App.js)       

[Exercise](http://scriptoj.mangojuice.top/problems/5)   
有一只狗，不允许别人摸它，一旦摸它就会叫，然后就跑了。     
完成 ```Dog``` 组件，当用户点击的时候会执行自身的 ```bark``` 和 ```run``` 方法。       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson9/src/Exercise.js)       

## [Lesson10](http://huziketang.mangojuice.top/books/react/lesson10) ```state``` and ```setState```     
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

## [Lesson11](http://huziketang.mangojuice.top/books/react/lesson11) ```props```     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson11/src/LikeButton.js)   

2 ways to set default props     
```javascript
render() {
    const wordings = this.props.wordings || {
        likeText: 'Like??',
        cancelText: 'Cancel??'
    };

    return (
        <button className='like-btn' onClick={this._onButtonPressed.bind(this)}>
            <span className='like-text'>{
                this.state.isLike ? wordings.cancelText : wordings.likeText
            }</span>
            <span>👍</span>
        </button>
    );
}
```

```javascript
static defaultProps = {
    wordings: {
        likeText: 'Like??',
        cancelText: 'Cancel??'
    }
};

render() {
    const {wordings} = this.props;
    return (
        <button className='like-btn' onClick={this._onButtonPressed.bind(this)}>
            <span className='like-text'>{
                this.state.isLike ? wordings.cancelText : wordings.likeText
            }</span>
            <span>👍</span>
        </button>
    );
}
```

[Exercise](http://scriptoj.mangojuice.top/problems/7)       
完成两个组件，电脑 ```Computer``` 和显示器 ```Screen```。     
电脑有个 ```status``` 状态表示电脑现在是开还是关的，```status``` 为 ```on``` 为开，```status``` 为 ```off``` 为关，默认状态为 ```off```。电脑有个按钮，点击可以自由切换电脑的开关状态。     
显示器接受一个名为 ```showContent``` 的 ```props```，显示器会把它内容显示出来。如果不传入 ```showContent```，显示器显示 “无内容”。       
电脑包含显示器，当电脑状态为开的时候显示器显示“显示器亮了”，否则显示“显示器关了”。     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson11/src/Exercise.js)   

## [Lesson12](http://huziketang.mangojuice.top/books/react/lesson12) Stateless Component       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson12/src/App.js)   

## [Lesson13](http://huziketang.mangojuice.top/books/react/lesson13) ListView       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson13/src/App.js)   

Run JS inside JSX tags, we use `{}`      
```javascript
const name = 'Jeff';
<div>{name}<div>
```

Put JSX inside JS code block        
```javascript
<header className="App-header">
{
    <div><h1>Line 1</h1></div>
}
</header>
```

Or more JSX     
```javascript
<header className="App-header">
{
    [
        <div><h1>Line 1</h1></div>,
        <div><h2>Line 2</h2></div>,
        <div>Line 3</div>
     ]
}
</header>
```

Let's say we have a user list
```javascript
const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
];
```

In order to show users on our view
```javascript
render() {
    const userElements = [];
    for (let user of users) {
        userElements.push(
            <div key={user.username}>
                <div>{`name: ${user.username}`}</div>
                <div>{`age: ${user.age}`}</div>
                <div>{`sex: ${user.gender}`}</div>
                <hr/>
            </div>
        );
    }
    return (
        <div className="App">
            <header className="App-header">{ userElements }</header>
        </div>
    );
}
```

**This code can be optimised to be ES6 style**
```javascript
render() {
    return (
        <div className="App">
            <header className="App-header">
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <div>{`name: ${user.username}`}</div>
                            <div>{`age: ${user.age}`}</div>
                            <div>{`sex: ${user.gender}`}</div>
                            <hr/>
                         </div>
                    );
                })
            }
            </header>
        </div>
    );
}
```

## [Lesson14](http://huziketang.mangojuice.top/books/react/lesson14) Commands       
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson14/src/App.js)   

![demo](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/lesson14.png)

Notice, to push elements to an array which is a value of the state, for example,        
```javascript
constructor(props) {
    super(props);
    this.state = {
        comments: []
    };
}
```

Update the array by ```...```
```javascript
_onSubmit(comment) {
    this.setState({comments: [...this.state.comments, comment]});
}
```

## [Lesson17](http://huziketang.mangojuice.top/books/react/lesson17) Props       

### Why do we need ```props```?
![props](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/props.png)      

[Exercise](http://scriptoj.mangojuice.top/problems/9)           
做一个百分比换算器，需要你完成三个组件：        
```<Input />```：封装了原生的```<input />```，可以输入任意数字        
```<PercentageShower />```：实时 显示 <Input /> 中的数字内容，但是需要把它转换成百分比，例如 <Input /> 输入的是 0.1，那么就要显示 10.00%，保留两位小数。      
```<PercentageApp />```：组合上述两个组件。       
[code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson17/src/PercentageApp.js)            

## [Lesson18](http://huziketang.mangojuice.top/books/react/lesson18) Lifecycle     
Go to [Babel online](https://babeljs.io/), JavaScript compiler to see what exactly JSX works.       

[App.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson18/src/App.js>       
[CountView.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson18/src/CountView.js>       

In [App.js], display another component [CountView.js]
```javascript
render() {
    return (
        <div>
            <CountView value={this.state.count}/>
            <button onClick={this._onButtonPressed.bind(this)}>Update view</button>
        </div>
    );
}
```

The lifecycle of 2 components ([App.js] and [CountView.js]) will be:        
```
[App Lifecycle] constructor
[App Lifecycle] componentWillMount
[App Lifecycle] render constructor
[CountView Lifecycle] componentWillMount
[CountView Lifecycle] render
[CountView Lifecycle] componentDidMount
[App Lifecycle] componentDidMount
```

When the "Update state" button is pressed, the state will be updated, and the new lifecycle events will be:       
```
[App Lifecycle] render
[CountView Lifecycle] shouldComponentUpdate
nextProps {value: 1}
[CountView Lifecycle] shouldComponentUpdate
nextProps {value: 1}
nextState null
[CountView Lifecycle] render
```

If we press "Hide/Show the view" button to hide or show a component, the new lifecycle events will be:     
Hide the view       
```
[App Lifecycle] render
```

Show the view
```
[App Lifecycle] render
[CountView Lifecycle] constructor
[CountView Lifecycle] componentWillMount
[CountView Lifecycle] render
[CountView Lifecycle] componentDidMount
```

***Notice, you can optimise code from here!***
```javascript
shouldComponentUpdate(nextProps, nextState){
    console.log('[CountView Lifecycle]', 'shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);

    // return true to call render(), false to do nothing
    return true;
}
```

## [Lesson19](http://huziketang.mangojuice.top/books/react/lesson19) ```componentWillMount``` and ```componentWillUnmount```     
[Code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson19/src/App.js)   
- ```componentWillMount```: Do tasks like component initialisation, Ajax request      
- ```componentWillUnmount```: Clear data while releasing components

### Update object state
Define a price object for state:        
```javascript
constructor(props) {
    super(props);
    this.state = {
        price: {}
    };
}
```
Update the object by coping a new object:       
```javascript
const price = Object.assign({}, this.state.price);
price.high = 10000;
price.low = 1000;
price.last = 9999;

this.setState({price: price});
```

[Exercise](http://scriptoj.mangojuice.top/problems/10)           
完成 ```Post``` 组件，它可以加载、刷新文章内容。        
已有函数 ```getPostData```，它会返回一个 ```Promise```，你可以通过它获取文章的内容。      
```javascript
getPostData().then((postContent) => {
  // ...
})
```
在获取数据的时候，```Post``` 组件的 ```div.post-content``` 中显示 数据加载中...，完成加载以后直接显示 ```getPostData``` 的返回结果。       
页面有个按钮，点击可以重新加载数据。      

Fetch Bit coin prices from [bitcoinaverage.com](https://apiv2.bitcoinaverage.com/) and match the selected currency. Using the ```rmc-picker``` dependency.      

![exercise](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/lesson19_1.png)     
![exercise](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/lesson19_2.png)     

[code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson19/src/Exercise.js)         

### Children call methods from parent       
For example, let's say we render ```Post``` component in App.js, and we'd like to call ```_handleResponse()``` in App.js while the "Refresh" button in ```Post``` is clicked.       
***Tips: Send the ```_handleResponse()``` ```Post``` as a prop, and don't forget to bind the method to the parent class.***       

In [App.js](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson19/src/Exercise.js)  
```javascript
_handleResponse(param) {
    console.log(`I got ${param}`);
}

render() {
    return (
        <div>
            <Post onResponse={this._handleResponse.bind(this)} />                
        </div>);
}
```

In ```pose``` class,        
```javascript
class Post extends Component {

    static defaultProps = {
        onResponse: null
    };

    _getPostData() {
        if (this.props.onResponse) {
            this.props.onResponse('Hello');
        }
    }

    render() {
        return (
            <div>
                <button onClick={this._getPostData.bind(this)}>Refresh</button>
            </div>
        );
    }
}
```

## [Lesson21](http://huziketang.mangojuice.top/books/react/lesson21) ```this.props.children```            
To send props to the child, let's say we need a ```content``` prop     
```javascript
<Card content='hello!'/>

```
In ```Card``` component, retrieve the 'hello!' by      
```javascript
this.props.content
```

Or you can past children like       
```javascript
<Card>Hello!</Card>
```

In ```Card``` component, retrieve the 'hello!' by      
```javascript
this.props.children
```

But what if we past many elements to ```Card```, how do we access each child?       
```javascript
<Card>
    <div>
        <h2>React.js 小书</h2>
        <div>开源、免费、专业、简单</div>
        订阅：
        <input/>
    </div>
</Card>
```

In ```Card```       
```javascript
this.props.children[0] // <h2/>
this.props.children[1] // <div/>
this.props.children[2] // 订阅：
this.props.children[3] // <input/>
```

[Exercise](http://scriptoj.mangojuice.top/problems/11)           
做一个百分比换算器，需要你完成三个组件：        
完成 ```Post``` 组件，接受一个字符串的 ```content``` 作为 ```props```，```Post``` 会把它显示到自己的 ```<p>``` 元素内。        
并且，点击 ```<p>``` 元素的时候，会使用 ```console.log``` 把元素的高度打印出来。       
[code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson21/src/Exercise.js)            

## [Lesson22](http://huziketang.mangojuice.top/books/react/lesson22) User-defined components and CSS        
[code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson22/src/app.js)         
![Card](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/lesson22.png)     

[Exercise](http://scriptoj.mangojuice.top/problems/12) Loop ```this.props.children```           
实现一个组件 ```BlackBorderContainer```，它会把作为它的嵌套结构的 每个直接子元素 都用一个黑色边框的 ```div``` 包裹起来。       
[code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson22/src/Exercise.js)           

## [Lesson23](http://huziketang.mangojuice.top/books/react/lesson23) Loading HTML dynamically via ```dangerouslySetInnerHTML``` and manipulate HTML style via ```setState()```       
[code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson23/src/app.js)         

1. Insert HTML code block       
```javascript
<div dangerouslySetInnerHTML={{__html: 'PUT YOUR HTML TAGS HERE'}}/>
```

2. Set CSS style        
```javascript
<h1 style='font-size: 12px; color: red;'>React.js 小书</h1>
```

3. Update CSS style by ```setState()```
```javascript
this.setState({style: '\'font-size: 12px; color: blue;\''});
```

4. Example      
```javascript
constructor() {
    super();
    this.state = {
        style: '\'font-size: 12px; color: red;\''
    };
}

render() {
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: `<h1 style=${this.state.style}>React.js 小书</h1>`}}/>
            <button onClick={() => {
                this.setState({style: '\'font-size: 12px; color: blue;\''});
                }}>BLUE
            </button>
        </div>
        );

}
```

[Exercise](http://scriptoj.mangojuice.top/problems/12) Convert JSX style to CSS style                 
完成一个函数 ```getDefaultStyledPost```，这个函数接受一个表示样式的对象作为参数，返回一个组件只有 ```<p>``` 元素的组件      
```javascript
const Post = getDefaultStyledPost({ color: 'red' })
<Post /> // <p>任意内容</p>，颜色为红色
```

渲染出来的 ```<p> ```元素要具有 ```getDefaultStyledPost``` 所接受对象所表示的样式。此外，返回的 ```Post``` 组件还要能够接受一个 ```style``` 对象作为 ```props```，这个对象会和原来的样式进行合并显示：``
```javascript
const Post = getDefaultStyledPost({ color: 'red' })
<Post style={{ color: 'blue', fontSize: '13px' }} />
<Post style={{ fontSize: '12px' }} />
````
[code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson23/src/Exercise.js)          


## [Lesson24](http://huziketang.mangojuice.top/books/react/lesson24) Default Type of props        
```
$yarn add prop-types
```

[code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson24/src/app.js)         

## [Lesson25](http://huziketang.mangojuice.top/books/react/lesson25)        
[code](https://github.com/Catherine22/Front-end-warm-up/tree/master/React/lesson25/src/app.js)        


# Reference
[React.js 小书](http://huziketang.mangojuice.top/books/react/)
