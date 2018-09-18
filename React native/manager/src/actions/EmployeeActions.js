import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ phone, name, shift }) => {
    const { currentUser } = firebase.auth();
    console.log('currentUser', currentUser);
    console.log(`phone:${phone} name:${name} shift:${shift}`);

    return (dispatch) => {
        // ES6 coding style `${}`
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop();
            });
    };
};


// Go to https://console.firebase.google.com/project/manager-9c412/database/manager-9c412/data to check what we just create
