import { SingleBrick } from 'breakout/Brick';
import config from '../../config';
import resetBall from './ResetBall';

type Player = {
  name: string,
  lives: number,
  score: number,
  level: number,
}

type BallObj = {
  x: number,
  y: number,
  dx: number,
  dy: number,
  rad: number,
  speed: number,
}

const allBroken = (bricks: SingleBrick[], player: Player, ballObj: BallObj): void => {
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
