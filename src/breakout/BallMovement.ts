import { getLocalStorageItem } from '../components/utils/LocalStorage';

const ballMovement = (ctx, ballObj) => {
  const status = getLocalStorageItem('gameStatus');
  const data = new Ball(ballObj.x, ballObj.y, ballObj.rad);
  if (status === 'true') {
    data.draw(ctx);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;
  }
};

class Ball {
  private x: number;
  private y: number;
  private rad: number;

  constructor(x: number, y: number, rad: number) {
    this.x = x;
    this.y = y;
    this.rad = rad;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
    ctx.strokeStyle = '#336633';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }
}

export default ballMovement;
