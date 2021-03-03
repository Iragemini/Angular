import React, { useRef, useEffect } from 'react';
import ballMovement from './BallMovement';
import config from '../config';
import wallCollision from './util/WallCollision';
import Paddle from './Paddle';
import brick from './Brick';
import brickCollision from './util/BrickCollision';
import paddleHit from './util/PaddleHit';
import playerStats from './PlayerStats';
import allBroken from './util/AllBroke';
import resetBall from './util/ResetBall';
import setGame from './util/SetGame';
import setLocalStorageItem from '../components/utils/LocalStorage';
import { mouseMoveHandler, keyPressHandler } from './util/Movement';

let bricks: any = [];

const { ballObj, paddleProps, brickObj, player } = config;

setGame();

const Board: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const render = () => {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

      paddleProps.y = canvas.height - 30;

      // Assign bricks
      const newBrickSet = brick(player.level, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      playerStats(ctx, player, canvas);

      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      ballMovement(ctx, ballObj);

      allBroken(bricks, player, ballObj);

      if (player.lives === 0) {
        setLocalStorageItem('score', { name: player.name, score: player.score }, 'arr');
        if (confirm('Game over! Press OK to start new Game')) {
          setLocalStorageItem('gameStatus', 'true');
        } else {
          setLocalStorageItem('gameStatus', 'false');
        }
        player.lives = 5;
        player.level = 1;
        player.score = 0;
        resetBall(ballObj, paddleProps);
        bricks.length = 0;
        brickObj.y = 80;
      }

      wallCollision(ballObj, canvas, player, paddleProps);

      let brickCollisions;

      for (let i = 0; i < bricks.length; i++) {
        brickCollisions = brickCollision(ballObj, bricks[i]);

        if (brickCollisions.hit && !bricks[i].broke) {
          if (brickCollisions.axis === 'X') {
            ballObj.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollisions.axis === 'Y') {
            ballObj.dy *= -1;
            bricks[i].broke = true;
          }
          player.score += 10;
        }
      }

      Paddle(ctx, canvas, paddleProps);

      paddleHit(ballObj, paddleProps);

      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <div className="row">
      <canvas
        tabIndex={1}
        id="canvas"
        ref={canvasRef}
        onMouseMove={(event) => mouseMoveHandler(event, canvasRef)}
        onKeyDown={(event) => keyPressHandler(event, canvasRef)}
        height="500"
        width="500"
      />
    </div>
  );
};

export default Board;
