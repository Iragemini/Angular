import React, { useRef, useEffect } from 'react';
import { BallMovement } from './BallMovements';
import config from "../config";
import WallCollision from './util/WallCollision';
import Paddle from './Paddle';
import Brick from './Brick';

let bricks = [];

let { ballObj, paddleProps, brickObj } = config;

let x = 0;

const Board = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            // Assign bricks
            let newBrickSet = Brick(2, bricks, canvas, brickObj);

            if(newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bricks.map((brick) => {
                return brick.draw(ctx);
            });
            
            BallMovement(ctx, ballObj);

            WallCollision(ballObj, canvas);

            Paddle(ctx, canvas, paddleProps);

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
