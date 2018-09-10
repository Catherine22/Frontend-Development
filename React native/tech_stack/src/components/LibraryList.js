import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        // boilerplate
        // When we create a ListView, we have to tell it what data we are gonna to use
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        // This is our data source for the ListView
        this.dataSource = ds.cloneWithRows(this.props.dataToShow);
    }

    // We have to tell ListView how to render a very specific row
    renderRow(library) {
        return <ListItem item={library} />;
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { dataToShow: state.libraries }; // key: value
};

// connect() is a function, when connect() is called, it returns another function
export default connect(mapStateToProps)(LibraryList);
