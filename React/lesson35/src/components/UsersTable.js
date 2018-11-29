import React, {Component} from 'react';
import {Grid, Input, Select} from 'react-spreadsheet-grid';
import './react_spreadsheet_grid_overrides.css';
import PropTypes from 'prop-types';
import {usersTableIDs} from './Constants';


class UsersTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: this.props.data
        }
    }

    static defaultPropTypes = {
        genderType: PropTypes.arrayOf(
            PropTypes.shape({// 是否符合指定格式的物件
                id: PropTypes.string,
                name: PropTypes.string
            })
        ),
        data: PropTypes.array.isRequired,
        onListChanged: PropTypes.func.isRequired
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
                age: thisYear - parseInt(value.birth),
                id: value.id
            });
        });
        return clone;
    }

    _onFieldChange(rowId, field, value) {
        console.log('UserTable', '_onFieldChanged', rowId, field, value);
        console.log('UserTable', this.state.rows);

        let formattedRow = this.formatUsers(this.state.rows)[rowId];
        let thisYear = new Date().getFullYear();
        let row = Object.assign({}, this.state.rows[rowId]);
        let isUpdated = false;
        switch (field) {
            case usersTableIDs.INPUT_NAME:
                isUpdated = formattedRow.username !== value;
                row.username = value;
                break;
            case usersTableIDs.INPUT_GENDER:
                isUpdated = formattedRow.gender !== value;
                row.isMale = (value === 'Male');
                break;
            case usersTableIDs.INPUT_AGE:
                isUpdated = formattedRow.age !== value;
                row.birth = `${thisYear - parseInt(value)}`;
                break;
            default:
        }


        if (isUpdated) {
            let modifiedRows = [...this.state.rows];
            modifiedRows[rowId] = row;
            this.setState({
                rows: this.formatUsers(modifiedRows)
            });
            console.log('modifiedRows', modifiedRows);

            this.props.onListChanged(modifiedRows);
        }
    }

    render() {
        console.log('props', this.props);
        console.log('state', this.state);
        return (
            <div>
                <Grid
                    columns={[
                        {
                            id: usersTableIDs.INPUT_NAME,
                            title: () => 'Name',
                            value: (row, {focus}) => {
                                return (
                                    <Input
                                        value={row.username}
                                        focus={focus}
                                        onChange={this._onFieldChange.bind(this, row.id, usersTableIDs.INPUT_NAME)}
                                    />
                                );
                            }
                        }, {
                            id: usersTableIDs.INPUT_GENDER,
                            title: () => 'Gender',
                            value: (row, {focus}) => {
                                return (
                                    <Select
                                        isOpen={focus}
                                        selectedId={row.gender}
                                        focus={focus}
                                        items={this.props.genderType}
                                        onChange={this._onFieldChange.bind(this, row.id, usersTableIDs.INPUT_GENDER)}
                                    />
                                );
                            }
                        }, {
                            id: usersTableIDs.INPUT_AGE,
                            title: () => 'Age',
                            value: (row, {focus}) => {
                                return (
                                    <Input
                                        value={row.age}
                                        focus={focus}
                                        onChange={this._onFieldChange.bind(this, row.id, usersTableIDs.INPUT_AGE)}
                                    />
                                );
                            }
                        }
                    ]}

                    rows={this.formatUsers(this.state.rows)}
                    getRowKey={row => row.id}
                />
            </div>);
    }

    componentWillReceiveProps(nextProps) {
        if (this.isEqual(nextProps.data, this.state.rows)) {
            return false;
        }
        this.setState({
            rows: nextProps.data
        });
        return true;
    }

    isEqual(array1, array2) {
        return JSON.stringify(array1) === JSON.stringify(array2);
    }

}

export default UsersTable;
