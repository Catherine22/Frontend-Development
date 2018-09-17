import firebase from 'firebase';
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
    // ES6 coding style
    firebase.database().ref(`users/${currentUser.uid}/employees`);

    return {
        type: EMPLOYEE_CREATE,
        payload: { phone, name, shift }
    };
};
