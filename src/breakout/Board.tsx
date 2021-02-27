import React, { useRef, useEffect } from 'react';
import { BallMovement } from './BallMovements';
import config from "../config";
import WallCollision from './util/WallCollision';
import Paddle from './Paddle';
import Brick from './Brick';
import BrickCollision from './util/BrickCollision';
import PaddleHit from './util/PaddleHit';
import PlayerStats from './PlayerStats';

let bricks = [];

let { ballObj, paddleProps, brickObj, player } = config;

let x = 0;

const Board = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            paddleProps.y = canvas.height - 30;

            // Assign bricks
            let newBrickSet = Brick(2, bricks, canvas, brickObj);

            if(newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet;
            }
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            PlayerStats(ctx, player, canvas);

            bricks.map((brick) => {
                return brick.draw(ctx);
            });
            
            BallMovement(ctx, ballObj);

            WallCollision(ballObj, canvas, player);

            let brickCollision;

            for (let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i]);
        
                if (brickCollision.hit && !bricks[i].broke) {
                  if (brickCollision.axis === "X") {
                    ballObj.dx *= -1;
                    bricks[i].broke = true;
                  } else if (brickCollision.axis === "Y") {
                    ballObj.dy *= -1;
                    bricks[i].broke = true;
                  }
                  player.score += 10;
                }
            }

            Paddle(ctx, canvas, paddleProps);

            PaddleHit(ballObj, paddleProps);

            requestAnimationFrame(render);
        }
        render();
    }, []);

    return (
        <canvas 
            id="canvas" 
            ref={canvasRef} 
            onMouseMove={(event) => paddleProps.x = event.clientX - paddleProps.width / 2 -10}
            height="500px" 
            width={window.innerWidth - 20} 
        />
    );
}

export default Board;
