import React, {Component} from 'react';

class Title extends Component {
	render() {
		return (
			<h1>
				{this.props.children ? this.props.children : 'Default Title'}
			</h1>);
	}
}

export {Title};
