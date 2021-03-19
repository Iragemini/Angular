type BallObj = {
  x: number,
  y: number,
  dx: number,
  dy: number,
  rad: number,
  speed: number,
}

type PaddleProps = {
  height: number,
  width: number,
  x: number,
  y: number,
}
type Player = {
  name: string,
  lives: number,
  score: number,
  level: number,
}

export default function wallCollision(ballObj: BallObj, canvas: HTMLCanvasElement, player: Player, paddleProps: PaddleProps): void {
  if (ballObj.y + ballObj.rad >= canvas.height) {
    player.lives--;
    ballObj.x = paddleProps.x;
    ballObj.y = paddleProps.y - 30;
    ballObj.dx = 6 * (Math.random() * 2 - 1);
    ballObj.dy = -6;
  }
  if (ballObj.y - ballObj.rad <= 0) {
    ballObj.dy *= -1;
  }
  if (ballObj.x - ballObj.rad <= 0 || ballObj.x + ballObj.rad >= canvas.width) {
    ballObj.dx *= -1;
  }
}
