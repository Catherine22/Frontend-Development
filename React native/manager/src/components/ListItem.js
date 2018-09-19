import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common/';

class ListItem extends Component {
    onRowPress() {

    }

    render() {
        console.log('ListItem', this.props);
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <CardSection>
                    <Text style={styles.titleStyle}>
                        {name}
                    </Text>
                </CardSection>
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

export default ListItem;
