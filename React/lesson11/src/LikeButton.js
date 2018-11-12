import React, {Component} from 'react';

class LikeButton extends Component {
    static defaultProps = {
        wordings: {
            likeText: 'Like??',
            cancelText: 'Cancel??'
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            'isLike': false
        };
    }

    _onButtonPressed() {
        this.setState({'isLike': !this.state.isLike});
    }

    render() {
        console.log('LikeButton props', this.props);
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
}

export default LikeButton;

