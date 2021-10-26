import React, { useState, useEffect } from 'react';

const Effect = () => {
    const [counts, setCounts] = useState(0);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        // Adding an empty array to make sure this function will not be invoked once "componentDidMount" and "componentDidUpdate"
        console.log('componentDidMount');
    }, []);

    useEffect(() => {
        console.log('counts updated');
    }, [counts]);

    const increase = () => {
        setCounts(counts + 1);
    };

    const decrease = () => {
        setCounts(counts - 1);
    };

    const onHideClick = () => {
        setHide(!hide);
    };

    return (
        <div>
            {!hide && (
                <div>
                    <button onClick={decrease}>-</button>
                    {counts}
                    <button onClick={increase}>+</button>
                </div>
            )}
            <button onClick={onHideClick}>Hide</button>
        </div>
    );
};

export default Effect;
