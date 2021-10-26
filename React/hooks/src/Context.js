import React, { createContext, useContext, useEffect, useState } from 'react';

const MoodContext = createContext('Unknown');

const Context = () => {
    const [mood, setMood] = useState('😀');
    useEffect(() => {
        setTimeout(() => {
            setMood('😭');
        }, 2000);
    }, []);
    return (
        <MoodContext.Provider value={mood}>
            <Box></Box>
        </MoodContext.Provider>
    );
};

const Box = () => {
    return <MoodEmoji></MoodEmoji>;
};

const MoodEmoji = () => {
    const mood = useContext(MoodContext);
    return <div>{mood}</div>;
};

export default Context;
