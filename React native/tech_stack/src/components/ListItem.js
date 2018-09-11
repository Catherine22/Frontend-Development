import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { contentStyle } = styles;
        const { item, expanded } = this.props;
        if (expanded) {
            return (
                <Text style={contentStyle}>{item.description}</Text>
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
        paddingHorizontal: 10
    },

    contentStyle: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15
    }
};

/* It will be called as our application state,
 * return selectedId and it will be state.selectedLibraryId.
 * Therefore, whenever our application state changes, it will
 * automatically rerun, causing a new set of props to our component,
 * which cause our app rerender
 */
const mapStateToProps = (state, ownProps) => {
    console.log('state', state);
    console.log('props', ownProps);
    const expanded = (state.selectedLibraryId === ownProps.item.id);
    /*
     * Technically, you should type { expanded: expanded },
     * because the key and the value are the same, you could just type { expanded }
     */
    return { expanded };
};

// connect() is a function, when connect() is called, it returns another function
export default connect(mapStateToProps, actions)(ListItem);

