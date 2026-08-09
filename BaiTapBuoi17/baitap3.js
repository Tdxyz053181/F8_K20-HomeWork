const players = [
  { id: 1, name: "DragonSlayer", scores: [120, 85, 200, 95], level: 8, badge: "gold" },
  { id: 2, name: "NightWolf",    scores: [60, 75, 50],        level: 5, badge: null },
  { id: 3, name: "StarQueen",    scores: [300, 250, 180, 90, 120], level: 12, badge: "diamond" },
  { id: 4, name: "IronFist",     scores: [40, 30],             level: 2, badge: null },
  { id: 5, name: "ShadowBlade",  scores: [150, 200, 175],      level: 9, badge: "silver" },
];

// Hàm 1
function getTotalScore(player) {
    return player.scores.reduce(function(total, scoreCurrent) {
        return total + scoreCurrent;
    }, 0);
}

// Hàm 2

function getRanking(players) {
    return players
        .map(function(player) {
            return {
                name: player.name,
                totalScore: getTotalScore(player),
                badge: player.badge ?? "none"
            };
        })
        .sort(function(a, b) {
            return b.totalScore - a.totalScore;
        })
        .map(function(player, index) {
            return {
                rank: index + 1,
                name: player.name,
                totalScore: player.totalScore,
                badge: player.badge
            };
        });
}

// Hàm 3
function getTopPlayers(players, n) {
    return getRanking(players)
        .slice(0, n)
        .map(function(player) {
            return player.name;
        });
}

// Hàm 4
function formatPlayerCard(player) {
    var totalScore = getTotalScore(player);

    var badgeText = "";

    if (player.badge === "diamond") {
        badgeText = " | 💎 DIAMOND";
    } else if (player.badge === "gold") {
        badgeText = " | 🏅 GOLD";
    } else if (player.badge === "silver") {
        badgeText = " | 🥈 SILVER";
    }

    return `${player.name} | Lv.${player.level} | ${totalScore} điểm${badgeText}`;
}

// Test Case
console.log(getTotalScore(players[0]));
console.log(getTotalScore(players[3]));
console.log(getRanking(players));


console.log(getTopPlayers(players, 3));
console.log(getTopPlayers(players, 1));
console.log(formatPlayerCard(players[0]));
console.log(formatPlayerCard(players[1]));
console.log(formatPlayerCard(players[2]));
