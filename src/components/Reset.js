import React from 'react';

const resetButton = ({ increment, onClickFunction }) => {
    const handleClick = () => {
        onClickFunction(increment)
    }
    return <button onClick={handleClick}>Reset{increment}</button>
}

export default resetButton;
