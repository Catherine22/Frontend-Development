import React, { useState, useCallback } from 'react';

const computeExpensiveValue = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n * 2);
        }, 4000);
    });
};

const Callback = () => {
    const [n, setN] = useState(1);
    const memorisedCallback = useCallback(() => {
        computeExpensiveValue(n).then((number) => {
            setN(number);
        });
    }, [n]);
    memorisedCallback();
    return <div>value: {n}</div>;
};

export default Callback;
