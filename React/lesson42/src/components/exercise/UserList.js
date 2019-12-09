import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class UserList extends Component {
    static defaultPropTypes = {
        users: PropTypes.array,
        updateUser: PropTypes.func
    };

    static defaultProps = {
        users: []
    };

    constructor() {
        super();
        this.state = {
            useState: false,
            users: [],
            isEditable: []
        }
    }

    componentWillReceiveProps() {
        this.setState({
            useState: false,
            users: [],
            isEditable: []
        })
    }

    editUser = (user, isEditable) => {
        let isEditableArray = [];
        let users = this.state.useState ? this.state.users : this.props.users;
        if (isEditable) {
            users.forEach((value) => {
                let isEditable = (value.id === user.id);
                isEditableArray.push(isEditable);
            });
        } else {
            users.forEach((value) => {
                isEditableArray.push(false);
                if (value.id === user.id) {
                    this.props.updateUser(value);
                }
            });
        }
        this.setState({
            users: this.state.useState ? this.state.users : this.props.users,
            isEditable: isEditableArray,
            useState: true
        });
    };

    updateUser = (field, event, user) => {
        let newUsers = [...this.state.users];
        newUsers.forEach((newUser) => {
            if (newUser.id === user.id) {
                if (field === 'username') {
                    newUser.username = event.target.value;
                } else if (field === 'birth') {
                    newUser.birth = event.target.value;
                }
            }
        });
        this.setState({
            users: newUsers
        });
    };

    render() {
        const {users} = this.state.useState ? this.state : this.props;
        let userTrs = [];
        users.forEach((user, index) => {
            if (!this.state.isEditable[index]) {
                userTrs.push(
                    <tr key={user.id}>
                        <th>{user.username}</th>
                        <th>{user.birth}</th>
                        <th>{user.isMale ? 'Male' : 'Female'}</th>
                        <th>
                            <button onClick={() => this.editUser(user, true)}>update</button>
                        </th>
                    </tr>)
            } else {
                userTrs.push(
                    <tr key={user.id}>
                        <th>
                            <textarea className='textAreaField' value={user.username}
                                      onChange={(event) => this.updateUser('username', event, user)}/>
                        </th>
                        <th>
                             <textarea className='textAreaField' value={user.birth}
                                       onChange={(event) => this.updateUser('birth', event, user)}/>
                        </th>
                        <th>{user.isMale ? 'Male' : 'Female'}</th>
                        <th>
                            <button onClick={() => this.editUser(user, false)}>done</button>
                        </th>
                    </tr>)
            }
        });
        return (
            <table>
                <tbody>
                {userTrs}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

UserList = connect(mapStateToProps)(UserList);
export {UserList};
