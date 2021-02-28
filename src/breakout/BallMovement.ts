import { getLocalStorageItem } from "../components/utils/LocalStorage";

export function BallMovement (ctx, ballObj) {
    let status = getLocalStorageItem("gameStatus");
    let data = new Ball (ballObj.x, ballObj.y, ballObj.rad);
    if(status === "true") {
        data.draw(ctx);
        ballObj.x += ballObj.dx;
        ballObj.y += ballObj.dy;
    }
}

class Ball {
    constructor (x : number, y: number, rad: number) {
        this.x = x;
        this.y = y;
        this.rad = rad;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "skyblue";
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
    }
}