import React, {Component} from 'react';
import './BlockBorderContainer.css';

class BlockBorderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.children) {
            const elements = [];
            React.Children.map(this.props.children.props.children, (value, index) => {
                elements.push(
                    <div key={index} className='blackBorder'>
                        {value}
                    </div>
                );
            });
            return elements;
        }
        return null;
    }
}

export {BlockBorderContainer};
