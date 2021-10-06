# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Getting Started with Create React App](#getting-started-with-create-react-app)
  - [Table of Contents](#table-of-contents)
  - [App structure](#app-structure)
  - [Hooks and Classes](#hooks-and-classes)
    - [React Hooks](#react-hooks)
    - [Lifecycle](#lifecycle)
  - [Redux](#redux)
    - [Action](#action)
    - [Reducer](#reducer)
    - [Store](#store)
    - [Middleware](#middleware)

## App structure

-   node_modules/
-   public/
    -   index.html
    -   favicon.ico
    -   manifest.xml: It allows users to download a shortcut to your website and have an icon on their desktop
-   src/

## Hooks and Classes

### React Hooks

Check out a react hooks example here: [react hooks example] and the YouTube video [react hooks course - all react hooks explained]. In general, you will use `useState` when you have states to manipulate inside your function components. `useReducer` is an Alternative to `useState`, which is preferable to `useState` when you have states that depend on other states.

When you have time-consuming tasks such as I/O operations, `useEffect` is the hook you need. Your `useEffect` will be invoked while your view has been rendered. **It will be invoked as long as the layout is rendered.** If you only want to invoke the `useEffect` hook once, for example, to fetch data for the current page, then you will need to set an argument that defines what states you want to listen to. Here is an example:

```JavaScript
useEffect(() => {
    fetchData();
}, []);
```

Leaving the array empty tells the react that your `useEffect` must not be called whenever the state has been changed. On the other hand, if you want to trigger the `useEffect` when a specific state has been changed, you can add the state to the array.

`useRef` is an alternative way to get the current value of a component. Traditionally, you might access the value of an input component as follow:

```JavaScript
import { useState } from 'react';

function Ref() {
    const [input1, setInput1] = useState('');
    const onChange = (event) => {
        setInput1(event.target.value);
    };

    return (
        <div>
            <div>
                Input 1: <input type="text" onChange={onChange}></input>
                &nbsp; The value is {input1}
            </div>
        </div>
    );
}

export default Ref;

```

Whenever the value of the input field changes, the `onChange` method will be triggered. If you do not need such a feature, you can use `useRef` to get the current value. Forms are a good example for this hook, you only need to validate and access your data before submitting user inputs.

### Lifecycle

## Redux

### Action

An action is an object that we create to represent users’ behaviours. We need dispatches to trigger an action.

### Reducer

A reducer is a function which receives actions and outputs what we called store in redux. When the store has been changed, redux makes changes to our view.

### Store

The store represents what our apps should look like. It is a big object that describes the state in our react app.

### Middleware

[react hooks example]: ./hooks/
[react hooks course - all react hooks explained]: https://www.youtube.com/watch?v=LlvBzyy-558
