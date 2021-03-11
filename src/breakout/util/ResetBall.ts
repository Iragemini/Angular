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
  color: string,
}
const resetBall = (ballObj: BallObj, paddleProps: PaddleProps): void => {
  ballObj.x = paddleProps.x;
  ballObj.y = paddleProps.y - 80;
  ballObj.dx = 6 * (Math.random() * 2 - 1);
  ballObj.dy = -6;
};

export default resetBall;
