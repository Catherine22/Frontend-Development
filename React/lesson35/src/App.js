import React, {Component} from 'react';
import './App.css';
import UsersTable from './components/UsersTable';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isMale: true,
            birth: '',
            id: '',

            users: [
                {
                    username: 'Alex',
                    isMale: true,
                    birth: 1988,
                    id: 'A0001'
                },

                {
                    username: 'Joanne',
                    isMale: false,
                    birth: 1980,
                    id: 'A0002'
                }
            ]
        };
    }

    _onGenderChecked() {
        this.setState({
            isMale: !this.state.isMale
        });
    }

    _onSubmitPressed() {
        if (this.state.username.length === 0) {
            alert('Please input username');
            return;
        }

        if (this.state.birth.length === 0) {
            alert('Please input birth');
            return;
        }

        let clone = [];
        this.state.users.map((value) => {
            if (value.id !== this.state.id) {
                clone.push(value);
            }
            return value;
        });

        this.setState({
            users: clone
        });
    }

    _onFieldChanged(rowId, fieldId, value) {

    }

    render() {
        const {username, birth, isMale, users} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <div className='input-field'>
                        <div className='input-item-field'>
                            <div>
                                Name: <input value={username}/>
                            </div>
                            <div>
                                Birth: <input value={birth}/>
                            </div>
                            <div>
                                <input type='checkbox'
                                       checked={isMale}
                                       onChange={this._onGenderChecked.bind(this)}/>Male
                                <input style={{marginLeft: 10}}
                                       type='checkbox'
                                       checked={!isMale}
                                       onChange={this._onGenderChecked.bind(this)}/>Female
                            </div>
                        </div>
                        <label className='button-submit' onClick={this._onSubmitPressed.bind(this)}>submit</label>
                    </div>
                    <UsersTable onFieldChanged={this._onFieldChanged.bind(this)} data={users}/>
                    <div className='footer'>
                        <label className='button-save' onClick={this._onSubmitPressed.bind(this)}>save</label>
                        <label className='button-save' onClick={this._onSubmitPressed.bind(this)}>cancel</label>
                    </div>
                </header>
            </div>
        );
    }
}


export default App;
