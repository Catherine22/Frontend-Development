// We wanna have multiple reducers like multiple different pieces of state
// To make always different pieces of reducers play nicely together, we use combineReducers
import { combineReducers } from 'redux';

export default combineReducers({
    libraries: () => []
});
