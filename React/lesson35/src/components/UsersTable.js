import React, {Component} from 'react';
import {Grid, Input, Select} from 'react-spreadsheet-grid';
import './react_spreadsheet_grid_overrides.css';
import PropTypes from 'prop-types';


class UsersTable extends Component {

    static defaultPropTypes = {
        genderType: PropTypes.arrayOf(
            PropTypes.shape({// 是否符合指定格式的物件
                id: PropTypes.string,
                name: PropTypes.string
            })
        ),
        data: PropTypes.array.isRequired,
        onFieldChanged: PropTypes.func.isRequired
    };

    static defaultProps = {
        genderType: [{
            id: 'Male',
            name: 'Male'
        }, {
            id: 'Female',
            name: 'Female'
        }],
        data: []
    };

    formatUsers(userList) {
        let clone = [];
        let thisYear = new Date().getFullYear();
        userList.map((value) => {
            clone.push({
                username: value.username,
                gender: (value.isMale === true) ? 'Male' : 'Female',
                age: thisYear - value.birth,
                id: value.id
            });
        });
        return clone;
    }

    render() {
        return (
            <div>
                <Grid
                    columns={[
                        {
                            id: 'Name',
                            title: () => 'Name',
                            value: (row, {focus}) => {
                                return (
                                    <Input
                                        value={row.username}
                                        focus={focus}
                                        onChange={this.props.onFieldChanged(row.id, 'Name', row.username)}
                                    />
                                );
                            }
                        }, {
                            id: 'Gender',
                            title: () => 'Gender',
                            value: (row, {focus}) => {
                                return (
                                    <Select
                                        isOpen={focus}
                                        selectedId={row.gender}
                                        focus={focus}
                                        items={this.props.genderType}
                                        onChange={this.props.onFieldChanged(row.id, 'Gender', row.gender)}
                                    />
                                );
                            }
                        }, {
                            id: 'Age',
                            title: () => 'Age',
                            value: (row, {focus}) => {
                                return (
                                    <Input
                                        value={row.age}
                                        focus={focus}
                                        onChange={this.props.onFieldChanged(row.id, 'Age', row.age)}
                                    />
                                );
                            }
                        }
                    ]}

                    rows={this.formatUsers(this.props.data)}
                    getRowKey={row => row.id}
                />
            </div>);
    }

}

export default UsersTable;
