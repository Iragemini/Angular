export default {
  ballObj: {
    x: 20,
    y: 200,
    dx: 5,
    dy: 5,
    rad: 10,
    speed: 10,
  },
  brickObj: {
    x: 0.5,
    y: 80,
    width: 800 / 10 - 1,
    height: 20,
    density: 2,
    colors: ['blue', '#336633'],
  },
  player: {
    name: 'Player',
    lives: 5,
    score: 0,
    level: 1,
  },
  paddleProps: {
    height: 20,
    width: 400,
    x: 100,
    y: 100,
    color: '#336666',
  },
  /* % of paddleProps.width*/
  paddleWidth: {
    easy: 50,
    medium: 35,
    hard: 15,
  },
};
