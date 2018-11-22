import React, {Component} from 'react';
import './App.css';
import UsersTable from './components/UsersTable';
import {ADD_USER, UPDATE_USER, DELETE_USER} from './Commands';
import {usersTableIDs} from './components/Constants';

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
            // users: [
            //     {
            //         username: 'Alex',
            //         isMale: true,
            //         birth: 1988,
            //         id: 'A0001'
            //     },
            //
            //     {
            //         username: 'Joanne',
            //         isMale: false,
            //         birth: 1980,
            //         id: 'A0002'
            //     }
            // ]
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

    _onNameChanged(event) {
        this.setState({
            user: {
                ...this.state.user,
                username: event.target.value
            }
        });
    }

    _onBirthChanged(event) {
        this.setState({
            user: {
                ...this.state.user,
                birth: event.target.value
            }
        });
    }

    _onMaleCheckboxPressed() {
        // console.log('M M C', this.maleCheckbox.checked);
        // console.log('M F C', this.femaleCheckbox.checked);
        let isMale;
        if (this.maleCheckbox.checked) {
            this.maleCheckbox.checked = true;
            this.femaleCheckbox.checked = false;
            isMale = true;
        } else {
            this.maleCheckbox.checked = false;
            this.femaleCheckbox.checked = true;
            isMale = false;
        }

        this.setState({
            user: {
                ...this.state.user,
                isMale
            }
        });
    }

    _onFemaleCheckboxPressed() {
        // console.log('F M C', this.maleCheckbox.checked);
        // console.log('F F C', this.femaleCheckbox.checked);
        let isMale;
        if (this.femaleCheckbox.checked) {
            this.maleCheckbox.checked = false;
            this.femaleCheckbox.checked = true;
            isMale = false;
        } else {
            this.maleCheckbox.checked = true;
            this.femaleCheckbox.checked = false;
            isMale = true;
        }

        this.setState({
            user: {
                ...this.state.user,
                isMale
            }
        });
    }

    _onSubmitPressed() {
        const {users} = this.state;
        const {username, isMale, birth} = this.state.user;
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
            }
        };

        console.log('action', addUser);
        this.store.dispatch(addUser);
    }

    _onSavePressed() {
        if (localStorage) {
            localStorage.setItem('users', JSON.stringify(this.state.users));
        }
    }

    _onCancelPressed() {
        if (localStorage) {
            localStorage.clear();
        }
    }

    _onFieldChanged(rowId, fieldId, value) {

        console.log('_onFieldChanged', rowId, fieldId, value);

        // const updateUser = {
        //     type: UPDATE_USER,
        //     user
        // };
        //
        // console.log('action', updateUser);
        // this.store.dispatch(updateUser);
    }

    render() {
        const {users} = this.state;
        const {username, birth, isMale} = this.state.user;
        return (
            <div className="App">
                <header className="App-header">
                    <div className='input-field'>
                        <div className='input-item-field'>
                            <div>
                                Name: <input value={username}
                                             onChange={this._onNameChanged.bind(this)}/>
                            </div>
                            <div>
                                Birth: <input value={birth}
                                              onChange={this._onBirthChanged.bind(this)}/>
                            </div>
                            <div>
                                <input ref={(input) => {
                                    this.maleCheckbox = input;
                                }}
                                       name='M'
                                       type='checkbox'
                                       checked={isMale}
                                       onChange={this._onMaleCheckboxPressed.bind(this)}/>Male
                                <input style={{marginLeft: 10}}
                                       ref={(input) => {
                                           this.femaleCheckbox = input;
                                       }}
                                       name='F'
                                       type='checkbox'
                                       checked={!isMale}
                                       onChange={this._onFemaleCheckboxPressed.bind(this)}/>Female
                            </div>
                        </div>
                        <label className='button-submit' onClick={this._onSubmitPressed.bind(this)}>submit</label>
                    </div>
                    <UsersTable onFieldChanged={this._onFieldChanged.bind(this)} data={users}/>
                    <div className='footer'>
                        <label className='button-save' onClick={this._onSavePressed.bind(this)}>save</label>
                        <label className='button-save' onClick={this._onCancelPressed.bind(this)}>clear</label>
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
            state = reducer(null, action);
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
                users: data
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
            case UPDATE_USER:
                users = [];
                let updated = false;
                state.users.forEach((user) => {
                    if (user.id === action.user.id) {
                        users.push(user);
                        if (user.username !== action.user.username
                            || user.isMale !== action.user.isMale
                            || user.birth !== action.user.birth) {
                            updated = true;
                        }
                    }
                });
                if (updated) {
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
