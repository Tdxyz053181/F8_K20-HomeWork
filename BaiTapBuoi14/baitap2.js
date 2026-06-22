function calculateScore(level, kills, boosted) {
    if (
        typeof level !== "number" || typeof kills !== "number" || level < 0 || kills < 0
    ) {
        return "Dữ liệu không hợp lệ";
    }

    if (typeof boosted !== "boolean") {
        boosted = false;
    }

    const baseScore = kills * 10;

    const bonusScore =
        level >= 5 ? baseScore * 0.5 : baseScore * 0.2;

    const finalScore = boosted ? (baseScore + bonusScore) * 2 : baseScore + bonusScore;

    return Math.floor(finalScore);
}

console.log(calculateScore(5, 20, true))
