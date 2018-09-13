import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    // Here it means some asynchronous actions are gonna happen,
    // and we cannot return an action immediately.
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        loginUserSuccess(dispatch, user);
                    })
                    .catch(error => {
                        loginUserFail(dispatch, error);
                    });
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const loginUserFail = (dispatch, error) => {
    dispatch({ type: LOGIN_USER_FAIL, payload: error });
};

