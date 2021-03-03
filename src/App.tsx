import React from 'react';
import Header from './components/Header';
import Board from './breakout/Board';
import Footer from './components/Footer';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './styles/index.scss';

const App = () => {
  return (
    <div className="container">
      <div className="app">
        <Header />
        <Board />
        <Footer />
      </div>
    </div>
  );
};
export default App;
