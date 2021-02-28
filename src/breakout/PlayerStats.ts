export default function PlayerStats(ctx, player, canvas) {
    // Player
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Name: ${player.name}`, 20, 30);

    // Lives
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    let gap = 0;
    ctx.fillText("Lives: ", canvas.width / 2 - 80, 30);
    for (let i = 0; i < player.lives; i = i + 1) {
        ctx.fillText("❤️", canvas.width / 2 + gap, 30);
        gap += 30;
    }

    // Level
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Level: ${player.level}`, canvas.width -300 , 30);

    // Score
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}