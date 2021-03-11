import config from '../../config';

const { paddleProps } = config;

const mouseMoveHandler = (e: MouseEvent, canvasRef): void => {
  const canvas: HTMLCanvasElement = canvasRef.current;
  canvas.focus();
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleProps.x = relativeX - paddleProps.width / 2;
  }
};

const keyPressHandler = (e: KeyboardEvent, canvasRef): void => {
  const canvas: HTMLCanvasElement = canvasRef.current;
  if (e.code == 'ArrowRight') {
    if (paddleProps.x < canvas.width - paddleProps.width) {
      paddleProps.x += 35;
    }
  } else if (e.code == 'ArrowLeft') {
    if (paddleProps.x > 0) {
      paddleProps.x -= 35;
    }
  }
};

export { mouseMoveHandler, keyPressHandler };
