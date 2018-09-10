import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log('LibraryList', this.props.dataToShow);
        return;
    }
}

const mapStateToProps = state => {
    return { dataToShow: state.libraries }; // key: value
};

// connect() is a function, when connect() is called, it returns another function
export default connect(mapStateToProps)(LibraryList);
