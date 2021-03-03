import { enterPress } from './components/Header';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App></App>, document.getElementById('root'));

document.addEventListener('keydown', (event) => enterPress(event), false);
