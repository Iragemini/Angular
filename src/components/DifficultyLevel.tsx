import React from 'react';

type LevelProps = {
  changeLevel: Function;
};

const DifficultyLevel: React.FC = ({ changeLevel }: LevelProps) => (
    <div className="input-field col s12">
      <select className="browser-default" onChange={(event) => changeLevel(event)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
)

export default DifficultyLevel;
