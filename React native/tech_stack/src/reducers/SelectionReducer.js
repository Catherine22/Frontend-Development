export default (state = null, action) => {
    console.log('Selection', action); // Press TouchableWithoutFeedback
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};

