import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
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
        default:
            return state;
    }
};
