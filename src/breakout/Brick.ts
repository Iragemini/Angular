type BrickParams = {
  x: number;
  y: number;
  width: number;
  height: number;
  colors: any;
};

const brick = (level: number, bricks: [], canvas: HTMLCanvasElement, brick: BrickParams) => {
  brick.width = canvas.width / 5 - 1;
  const newbricks = [];
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
      brick.height,
      brick.colors
    );
    newbricks.push(newBrick);

    brick.x += brick.width + 1;
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5;
      brick.y += brick.height + 1;
    }
  }
  return newbricks;
};

class SingleBrick {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private colors: String[];
  private broke: boolean;

  constructor(x: number, y: number, width: number, height: number, colors: []) {
    this.x = x - width;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colors = colors;
    this.broke = false;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.broke ? 'rgba(19, 73, 89, 0)' : this.colors[1];
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.broke ? 'rgba(19, 73, 89, 0)' : 'transparent';
    ctx.fill();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

export default brick;
