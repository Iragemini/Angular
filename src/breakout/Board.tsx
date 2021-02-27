import React, { useRef, useEffect } from 'react';
import { BallMovement } from './BallMovements';
import config from "../config";
import WallCollision from './util/WallCollision';

let x = 0;

const Board = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            let { ballObj } = config;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            BallMovement(ctx, ballObj);

            WallCollision(ballObj, canvas);

            requestAnimationFrame(render);
        }
        render();
    }, []);

    return (
        <canvas id="canvas" height="500px" ref={canvasRef} width="800px" />
    );
}

export default Board;
