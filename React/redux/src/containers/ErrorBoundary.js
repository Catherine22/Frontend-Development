import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    componentDidCatch(error, info) {
        console.error('ErrorBoundary', error, info);
        this.setState({
            hasError: true,
        });
    }
    render() {
        return this.state.hasError ? <div>Error</div> : this.props.children;
    }
}

export default ErrorBoundary;
