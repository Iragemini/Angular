import config from '../../config';
import resetBall from './ResetBall';

const allBroken = (bricks, player, ballObj): void => {
  const { brickObj, paddleProps } = config;
  let total = 0;
  for (let i = 0; i < bricks.length; i = i + 1) {
    if (bricks[i].broke === true) {
      total++;
    }
  }
  if (total === bricks.length) {
    player.level++;
    resetBall(ballObj, paddleProps);
    brickObj.y = 80;
  }
};

export default allBroken;
