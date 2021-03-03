export default function playerStats(ctx, player, canvas): void {
  const begin = 20;
  // Player
  ctx.font = '20px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText(`Name: ${player.name}`, begin, 30);

  // Lives
  ctx.font = '20px Arial';
  ctx.fillStyle = 'red';
  let gap = 70;
  ctx.fillText('Lives: ', begin, 60);
  for (let i = 0; i < player.lives; i = i + 1) {
    ctx.fillText('❤️', begin + gap, 60);
    gap += 30;
  }

  // Level
  ctx.font = '20px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText(`Level: ${player.level}`, canvas.width - 140, 30);

  // Score
  ctx.font = '20px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 60);
}
