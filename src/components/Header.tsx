import React, { useState, useEffect } from 'react';
import DifficultyLevel from './DifficultyLevel';
import StartButton from './StartButton';
import setLocalStorageItem, { getLocalStorageItem } from './utils/LocalStorage';
import config from '../config';

let { paddleProps, paddleWidth } = config;

const Header = () => {
    const [status, setStatus] = useState(getLocalStorageItem("gameStatus"));
    const [text, setText] = useState();
    const [level, setLevel] = useState(getLocalStorageItem("gameLevel"));

    const toggleStart = () => {
        if(status === "false") {
            setStatus("true");
        } else {
            setStatus("false");
        }
    }
    const changeLevel = (event) => {
        setLevel(event.target.value);
    }

    useEffect(() => {
        console.log("use effect status", status);
        setLocalStorageItem("gameStatus", status);
        if(status === "false") {
            setText("Start");
        } else {
            setText("Pause");
        }
        setLocalStorageItem("gameLevel", level);
        if(level === "easy") {
            paddleProps.width = paddleWidth.easy;
        } else if (level === "medium") {
            paddleProps.width = paddleWidth.medium;
        } else {
            paddleProps.width = paddleWidth.hard;
        }
    }, [status, level]);

    return (
        <div>
            <StartButton toggleStart={toggleStart} text={text}/>
            <DifficultyLevel changeLevel={changeLevel}/>
        </div>
    );
}

export default Header;
