export default (ctx, canvas, paddleProps) => {
  class Paddle {
    private x: number;
    private y: number;
    private height: number;
    private width: number;
    private colors: String[];
    private broke: string;

    constructor(x) {
      this.x = x;
      this.y = canvas.height - 30;
      this.height = 20;
      this.width = paddleProps.width;
      this.colors = ['#336633', '#336666'];
    }
    move() {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.broke ? 'white' : this.colors[1];
      ctx.strokeStyle = this.broke ? 'white' : '#336633';
      ctx.lineWidth = 1;
      ctx.fillStyle = this.broke ? 'white' : this.colors[1];
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'blue';
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      ctx.fill();
    }
  }

  const paddle = new Paddle(paddleProps.x);
  paddle.move();
  if (paddleProps.x <= 0) {
    paddleProps = 0;
  } else if (paddleProps.x + paddleProps.width >= canvas.width) {
    paddleProps.x = canvas.width - paddleProps.width;
  }
};
