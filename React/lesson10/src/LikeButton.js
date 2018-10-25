import React, {Component} from 'react';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: false,
            count: 0
        };
    }

    _onLikeButtonPressed() {
        console.log('count:', this.state.count);
        console.log('step1 isLike:', this.state.isLike);
        this.setState({isLike: !this.state.isLike});
        this.setState({count: this.state.count + 1});
        this.setState((prevState) => {
            return {count: prevState.count + 1};
        });
        console.log('step2 isLike:', this.state.isLike);
    }

    render() {
        console.log('render');
        return (
            <div className="App">
                <header className="App-header">
                    <button className='like-btn' onClick={this._onLikeButtonPressed.bind(this)}>
              <span className='like-text'>{
                  this.state.isLike ? 'Cancel' : 'Like'
              }</span>
                        <span>👍</span>
                    </button>
                </header>
            </div>
        );
    }
}

export default LikeButton;
