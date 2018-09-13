import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    user: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log('AuthReducer', action);
    switch (action.type) {
        case EMAIL_CHANGED:
            /* The whole purpose here is to store the current value of the TextInput,
             * and we gonna catch that right here.
             *
             * ...state: Make a new object, take all of the existing properties
             * and throw them into that object. Then define the property email,
             * give it value of action.payload and toss it on top of whatever properties
             * are run in state object.
             *
             * So if the state already has an email property, it will be overwritten by
             * the value (action.payload) we are trying to adding on the top of here
             */
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, error: '', loading: true };
        case LOGIN_USER_SUCCESS:
            // we reset everything here
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            // reset password
            return { ...state, error: action.payload, password: '', loading: false };
        default:
            return state;
    }
};
