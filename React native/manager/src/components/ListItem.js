import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common/';

class ListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        console.log('ListItem', this.props);
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
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

export default ListItem;
