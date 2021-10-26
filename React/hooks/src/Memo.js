import React, { useMemo, useState } from 'react';

const computeExpensiveValue = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n * 2);
        }, 4000);
    });
};
const Memo = () => {
    const [n, setN] = useState(1);
    useMemo(() => {
        computeExpensiveValue(n).then((number) => {
            setN(number);
        });
    }, [n]);
    return <div>value: {n}</div>;
};

export default Memo;
