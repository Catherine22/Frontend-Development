import { useReducer } from 'react';

// actions
const ACT_INCREASE = 0;
const ACT_DECREASE = 1;
const ACT_SHOW_TEXT = 3;

const reducer = (state, action) => {
    switch (action.type) {
        case ACT_INCREASE:
            return {
                ...state,
                counts: state.counts + 1,
            };
        case ACT_DECREASE:
            return {
                ...state,
                counts: state.counts - 1,
            };
        case ACT_SHOW_TEXT:
            return {
                ...state,
                showText: true,
            };
        default:
            return state;
    }
};

function Reducer() {
    const [state, dispatch] = useReducer(reducer, {
        counts: 0,
        showText: false,
    });
    const increase = (event) => {
        dispatch({ type: ACT_INCREASE });
        dispatch({ type: ACT_SHOW_TEXT });
    };
    const decrease = (event) => {
        dispatch({ type: ACT_DECREASE });
        dispatch({ type: ACT_SHOW_TEXT });
    };

    return (
        <div className="App">
            <button onClick={decrease}>-</button>
            count: {state.counts}
            <button onClick={increase}>+</button>
            <br></br>
            {state.showText && <span>Well done!</span>}
        </div>
    );
}

export default Reducer;
