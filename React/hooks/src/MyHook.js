import React, { useEffect, useState, useRef } from 'react';

const MyHook = () => {
    const [counts, setCounts] = useState(null);
    const prevCountRef = useRef(null);
    useEffect(() => {
        prevCountRef.current = counts;
    });
    const prevCounts = prevCountRef.current;

    const increase = () => {
        setCounts(counts + 1);
    };

    const decrease = () => {
        setCounts(counts - 1);
    };

    return (
        <div>
            <div>
                Previous state: <span>{prevCounts}</span>
            </div>
            <div>
                <button onClick={decrease}>-</button>
                {counts}
                <button onClick={increase}>+</button>
            </div>
        </div>
    );
};

export default MyHook;
