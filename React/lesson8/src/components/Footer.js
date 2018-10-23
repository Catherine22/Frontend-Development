import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<h1>
				{this.props.children ? this.props.children : 'Default Footer'}
			</h1>);
	}
}

export {Footer};
