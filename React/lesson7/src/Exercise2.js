import React, {Component} from 'react';

class Exercise2 extends Component {
    render() {
        const title = <h1 className='title'>ScriptOJ</h1>;
        const page = <div className='content'>{title}</div>;
        return (
            <div>
                {page}
            </div>
        );
    }
}

export default Exercise2;
