import Header from './components/Header';
import React from 'react';
import Board from './breakout/Board';
import './styles/index.scss';

const App = () => {
  return (
    <div>
      <Header/>
      <Board/>
    </div>
  );
};
export default App;
