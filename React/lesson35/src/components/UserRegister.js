import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserRegister extends Component {
    static defaultPropTypes = {
        submitButtonPressed: PropTypes.func.isRequired,
        user: PropTypes.shape({
            username: PropTypes.string,
            isMale: PropTypes.bool,
            birth: PropTypes.string,
            id: PropTypes.number
        })
    };

    static defaultProps = {
        user: null
    };

    constructor() {
        super();
        this.state = {
            username: '',
            isMale: true,
            birth: '',
            id: -1
        };
    }

    nameChanged = (event) => {
        this.setState({username: event.target.value});
    };

    birthChanged = (event) => {
        this.setState({birth: event.target.value});
    };

    maleCheckboxPressed = () => {
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

        this.setState({isMale});
    };

    femaleCheckboxPressed = () => {
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

        this.setState({isMale});
    };

    componentWillReceiveProps(nextProps, nextState) {
        this.setState(nextProps);
    }

    render() {
        const {username, birth, isMale} = this.state;
        return (
            <div className='input-field'>
                <div className='input-item-field'>
                    <div>
                        Name: <input value={username}
                                     onChange={this.nameChanged}/>
                    </div>
                    <div>
                        Birth: <input value={birth}
                                      onChange={this.birthChanged}/>
                    </div>
                    <div>
                        <input ref={(input) => {
                            this.maleCheckbox = input;
                        }}
                               name='M'
                               type='checkbox'
                               checked={isMale}
                               onChange={this.maleCheckboxPressed}/>Male
                        <input style={{marginLeft: 10}}
                               ref={(input) => {
                                   this.femaleCheckbox = input;
                               }}
                               name='F'
                               type='checkbox'
                               checked={!isMale}
                               onChange={this.femaleCheckboxPressed}/>Female
                    </div>
                </div>
                <label className='button-submit'
                       onClick={() => this.props.submitButtonPressed(this.state)}>submit</label>
            </div>
        );
    }

}

export default UserRegister;
