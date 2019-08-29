import React from 'react';

const decreaseButton = ({ increment, onClickFunction }) => {
    const handleClick = () => {
        onClickFunction(increment)
    }
    return <button onClick={handleClick}>-{increment}</button>
}

export default decreaseButton;
