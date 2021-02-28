import React from 'react';

const DifficultyLevel = ({changeLevel}) => {
    return (
        <div>
            <select onChange={(event) => changeLevel(event)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    );
}

export default DifficultyLevel;
