import { useState } from 'react';
function State() {
    const [counts, setCounts] = useState(0);
    const increase = (event) => {
        setCounts(counts + 1);
    };
    const decrease = (event) => {
        setCounts(counts - 1);
    };

    return (
        <div className="App">
            <button onClick={decrease}>-</button>
            count: {counts}
            <button onClick={increase}>+</button>
        </div>
    );
}

export default State;
