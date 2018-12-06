import React, {Component} from 'react';
import './App.css';
import {ADD_USER, DELETE_USER, UPDATE_USER} from './Commands';
import UserRegister from './components/UserRegister';
import UserList from './components/UserList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                isMale: true,
                birth: '',
                id: -1
            },
            users: []
        };
    }

    componentWillMount() {
        this.store = this.createStore(this.reducer);
        this.store.subscribe(() => {
            console.log('subscribe', this.store.getState());
            this.setState({
                users: this.store.getState().users
            });
        });
        this.setState({
            users: this.store.getState().users
        });
    }

    tableChanged = (user) => {
        const updateUsers = {
            type: UPDATE_USER,
            user
        };

        console.log('action', updateUsers);
        this.store.dispatch(updateUsers);
    };

    submitButtonPressed = (user) => {
        const {users} = this.state;
        const {username, isMale, birth} = user;
        if (username.length === 0) {
            alert('Please input username');
            return;
        }

        if (birth.length === 0) {
            alert('Please input correct birth');
            return;
        }

        const addUser = {
            type: ADD_USER,
            user: {
                username,
                isMale,
                birth,
                id: users.length
            },
            users
        };

        console.log('action', addUser);
        this.store.dispatch(addUser);
    };

    saveButtonPressed = () => {
        if (localStorage) {
            localStorage.setItem('users', JSON.stringify(this.state.users));
        }
    };

    cancelButtonPressed = () => {
        if (localStorage) {
            localStorage.clear();
        }
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <UserRegister user={this.state.user} submitButtonPressed={this.submitButtonPressed}/>
                    <UserList users={this.state.users} updateUser={(user) => this.tableChanged(user)}/>
                    <div className='footer'>
                        <label className='button-save' onClick={this.saveButtonPressed}>save</label>
                        <label className='button-save' onClick={this.cancelButtonPressed}>clear</label>
                    </div>
                </header>
            </div>
        );
    }

    createStore(reducer) {
        let state = null;
        const listeners = [];
        const subscribe = (listener) => listeners.push(listener);
        const getState = () => state;
        const dispatch = (action) => {
            state = reducer(state, action);
            listeners.forEach((listener) => listener());
        };

        // initialise the state
        dispatch({});
        return {getState, dispatch, subscribe};
    }

    reducer(state, action) {
        if (!state) {
            let data = [];
            if (localStorage && localStorage.getItem('users'))
                data = JSON.parse(localStorage.getItem('users'));
            state = {
                users: data,
                user: null
            };
        }

        let users = [];
        switch (action.type) {
            case ADD_USER:
                users = [...state.users];
                let isNewUser = true;
                let header = users.length - 1;
                while (header >= 0) {
                    if (users[header].id === action.user.id) {
                        isNewUser = false;
                        break;
                    }
                    header -= 1;
                }

                if (isNewUser) {
                    users.push(action.user);
                    return {
                        ...state,
                        users
                    };
                } else {
                    console.log('Error! User existed');
                    return state;
                }
            case UPDATE_USER:
                return {
                    ...state
                };
            case DELETE_USER:
                users = [];
                state.users.forEach((value) => {
                    if (value.id !== action.user.id) {
                        users.push(value);
                    }
                });
                if (users.length !== state.users.length) {
                    return {
                        ...state,
                        users
                    };
                } else {
                    console.log('Error! User not found');
                    return state;
                }
            default:
                return state;
        }
    }
}


export default App;
