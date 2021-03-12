import {Colors} from '../Colors';

const Y_POS_DELTA: number = 140;
const X_POS_LINE1: number = 30;
const X_POS_LINE2: number = 60;
const START_POS: number = 20;

type Player = {
  name: string,
  lives: number,
  score: number,
  level: number,
}

export default function playerStats(ctx: CanvasRenderingContext2D, player: Player, canvas: HTMLCanvasElement): void {
  const begin = START_POS;
  // Player
  ctx.font = '20px Arial';
  ctx.fillStyle = Colors.White;
  ctx.fillText(`Name: ${player.name}`, begin, X_POS_LINE1);

  // Lives
  ctx.font = '20px Arial';
  ctx.fillStyle = Colors.Red;
  let gap = 70;
  ctx.fillText('Lives: ', begin, X_POS_LINE2);
  for (let i = 0; i < player.lives; i = i + 1) {
    ctx.fillText('❤️', begin + gap, X_POS_LINE2);
    gap += 30;
  }

  // Level
  ctx.font = '20px Arial';
  ctx.fillStyle = Colors.White;
  ctx.fillText(`Level: ${player.level}`, canvas.width - Y_POS_DELTA, X_POS_LINE1);

  // Score
  ctx.font = '20px Arial';
  ctx.fillStyle = Colors.Red;
  ctx.fillText(`Score: ${player.score}`, canvas.width - Y_POS_DELTA, X_POS_LINE2);
}
