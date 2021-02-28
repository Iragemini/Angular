import config from '../../config';
import ResetBall from "./ResetBall";

export default function AllBroken(bricks, player, canvas, ballObj) {
    let {brickObj, paddleProps} = config;
    let total = 0;
    for (let i = 0; i < bricks.length; i = i + 1) {
        if (bricks[i].broke === true) {
            total++;
        }
    }
    if (total === bricks.length) {
        player.level++;
        ResetBall(ballObj, canvas, paddleProps);
        brickObj.y = 50;
    }
}