import React, {Component} from 'react';
import './CommentInput.css';


class CommentInput extends Component {

    static defaultProps = {
        wordings: {
            userName: '用户名：',
            comment: '评论内容：',
            submit: '提交'
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            commentInput: "";
    }
    }

    _onSubmitPressed() {
    }


    _updateUserInputValue() {
    }


    _updateCommentInputValue() {
    }

    render() {
        return (
            <div>
                <div className="commentInput">
                    <div className="inputTitle">
                        <label className="text">{this.props.wordings.userName}</label>
                        <label className="text">{this.props.wordings.comment}</label>
                    </div>
                    <form className="inputField">
                        <div>
                            <label>
                                <input type="standardText" name="userInput" className="singleLineInputField"
                                       value={this.state.userInput}
                                       onChange={(text) => this._updateUserInputValue(text)}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="standardText" name="commentInput" className="multiLinesInputField"
                                       value={this.state.commentInput}
                                       onChange={(text) => this._updateCommentInputValue(text)}/>
                            </label>
                        </div>
                        <button className="standardButton"
                                onClick={this._onSubmitPressed.bind(this)}>{this.props.wordings.submit}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export {CommentInput};
