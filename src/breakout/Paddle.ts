
import {Colors} from '../Colors';

type PaddleProps = {
  height: number,
  width: number,
  x: number,
  y: number,
  color: string,
}

const paddleFactory = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, paddleProps: PaddleProps) => {
  const paddle = new Paddle(ctx, canvas, paddleProps);
  paddle.move();
  paddle.check();
};


class Paddle {
  private x: number;
  private y: number;
  private height: number;
  private width: number;
  private colors: string[];
  private broke: string;
  private ctx: CanvasRenderingContext2D;
  private paddleProps: PaddleProps; 
  private canvas: HTMLCanvasElement;

  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, paddleProps: PaddleProps) {
    this.ctx = ctx;
    this.paddleProps = paddleProps;
    this.canvas = canvas;
    this.x = paddleProps.x;
    this.y = canvas.height - 30;
    this.height = 20;
    this.width = paddleProps.width;
    this.colors = [Colors.DarkGrayishGreen, Colors.DarkCyanGray];
  }
  move() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = this.broke ? Colors.White : this.colors[1];
    this.ctx.strokeStyle = this.broke ? Colors.White : Colors.DarkCyanGray;
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = this.broke ? Colors.White : this.colors[1];
    this.ctx.shadowBlur = 0;
    this.ctx.shadowColor = Colors.Blue;
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.ctx.fill();
  }
  check() {
    if (this.paddleProps.x <= 0) {
      this.paddleProps.x = 0;
    } else if (this.paddleProps.x + this.paddleProps.width >= this.canvas.width) {
      this.paddleProps.x = this.canvas.width - this.paddleProps.width;
    }
  }
}

export default paddleFactory;