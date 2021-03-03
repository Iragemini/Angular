import initialSet from '../../components/utils/LocalStorage';

const setGame = (): void => {
  initialSet('gameStatus', 'false');
  initialSet('gameLevel', 'easy');
  initialSet('score', JSON.stringify([]));
};

export default setGame;
