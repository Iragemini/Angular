import React from 'react';

type StartProps = {
  toggleStart: Function;
  text: string;
};

const StartButton: React.FC = ({ toggleStart, text }: StartProps) => {
  return (
    <div>
      <button className="btn waves-effect waves-light" onClick={() => toggleStart()}>
        {text}
      </button>
    </div>
  );
};

export default StartButton;
