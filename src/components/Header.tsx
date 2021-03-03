import React, { useState, useEffect, useCallback } from 'react';
import DifficultyLevel from './DifficultyLevel';
import StartButton from './StartButton';
import setLocalStorageItem, { getLocalStorageItem } from './utils/LocalStorage';
import config from '../config';
import useSound from 'use-sound';
import showToast from './utils/ShowToast';
import resetBall from '../breakout/util/ResetBall';
import Statistics from './Statistics';

const { ballObj, paddleProps, brickObj, player, paddleWidth } = config;

const initialWidth: number = paddleProps.width;

const soundUrl = '../sounds/start.mp3';

const enterPress = (e: KeyboardEvent) => {
  if (e.key.toLowerCase() !== 'enter') {
    return;
  }
};

const Header: React.FC = () => {
  const [status, setStatus] = useState(getLocalStorageItem('gameStatus'));
  const [text, setText] = useState();
  const [level, setLevel] = useState(getLocalStorageItem('gameLevel'));

  const [play] = useSound(soundUrl);

  const toggleStart = useCallback(() => {
    play();
    if (status === 'false') {
      setStatus('true');
      showToast('Start!', 3000);
    } else {
      setStatus('false');
      showToast('Pause!', 3000);
    }
  });
  const changeLevel = (event) => {
    setLevel(event.target.value);
    setStatus('false');
    newGame();
  };

  const showResults = () => {
    play();
  };

  const newGame = () => {
    player.lives = 5;
    player.level = 1;
    player.score = 0;
    resetBall(ballObj, paddleProps);
    // bricks.length = 0;
    brickObj.y = 80;
  };

  useEffect(() => {
    const enterStart = () => {
      toggleStart();
    };
    enterStart();
  }, [enterPress]);

  useEffect(() => {
    play();

    setLocalStorageItem('gameStatus', status);
    if (status === 'false') {
      setText('Start');
    } else {
      setText('Pause');
    }
    setLocalStorageItem('gameLevel', level);
    if (level === 'easy') {
      paddleProps.width = (initialWidth * paddleWidth.easy) / 100;
    } else if (level === 'medium') {
      paddleProps.width = (initialWidth * paddleWidth.medium) / 100;
    } else {
      paddleProps.width = (initialWidth * paddleWidth.hard) / 100;
    }
  }, [status, level]);

  return (
    <div className="row">
      <div className="header">
        <StartButton toggleStart={toggleStart} text={text} />
        <DifficultyLevel changeLevel={changeLevel} />
        <Statistics showResults={showResults} />
      </div>
    </div>
  );
};

export default Header;
export { enterPress };
