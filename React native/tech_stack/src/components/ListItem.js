import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        const { item, selectedId } = this.props;
        if (item.id === selectedId) {
            return (
                <Text>{item.description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.item;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectionLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>

                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingHorizontal: 15
    }
};

/* It will be called as our application state,
 * return selectedId and it will be state.selectedLibraryId
 */
const mapStateToProps = state => ({ selectedId: state.selectedLibraryId }); // key: value

// connect() is a function, when connect() is called, it returns another function
export default connect(mapStateToProps, actions)(ListItem);

