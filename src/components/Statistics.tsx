import React from 'react';

type StatProps = {
  showResults: Function;
};

const Statistics: React.FC = ({ showResults }: StatProps) => {
  return (
    <div>
      <button className="btn waves-effect waves-light" onClick={() => showResults()}>
        Results
      </button>
    </div>
  );
};

export default Statistics;
