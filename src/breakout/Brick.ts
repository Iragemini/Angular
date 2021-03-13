
import {Colors} from '../Colors';

type BrickParams = {
  x: number;
  y: number;
  width: number;
  height: number;
}

const brickFactory = (level: number, bricks: SingleBrick[], canvas: HTMLCanvasElement, brick: BrickParams) => {
  brick.width = canvas.width / 5 - 1;
  const newBricks: SingleBrick[] = [];
  if (!bricks) {
    return [];
  }
  if (bricks.length >= 5 * level) {
    return;
  }

  for (let i = 0; i < 5 * level; i = i + 1) {
    const newBrick = new SingleBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height
    );
    newBricks.push(newBrick);

    brick.x += brick.width + 1;
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5;
      brick.y += brick.height + 1;
    }
  }
  return newBricks;
};

class SingleBrick {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  public broke: boolean;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x - width;
    this.y = y;
    this.width = width;
    this.height = height;
    this.broke = false;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.broke ? Colors.DuskyAzure : Colors.DarkGrayishGreen;
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.broke ? Colors.DuskyAzure : Colors.Transparent;
    ctx.fill();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

export default brickFactory;
export {SingleBrick};
