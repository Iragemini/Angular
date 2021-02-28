import React from 'react';

const StartButton = ({toggleStart, text}) => {

    return (
        <div>
            <button onClick={() => toggleStart()}>{text}</button>
        </div>
    );
}

export default StartButton;
