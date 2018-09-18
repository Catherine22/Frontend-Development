import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common/';

class ListItem extends Component {
    render() {
        console.log('ListItem', this.props);
        const { name } = this.props.employee;
        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
            </CardSection>
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
