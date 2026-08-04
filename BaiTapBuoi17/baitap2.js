const comments = [
  { id: 1, user: "An", content: "Sản phẩm rất tốt!", rating: 5, verified: true, likes: 12 },
  { id: 2, user: "", content: "ok", rating: 3, verified: false, likes: 0 },
  { id: 3, user: "Bình", content: "Mua lần 2 rồi, vẫn chất lượng", rating: 4, verified: true, likes: 8 },
  { id: 4, user: "Chi", content: "   ", rating: null, verified: false, likes: 2 },
  { id: 5, user: "Duy", content: "Giao hàng nhanh, đóng gói cẩn thận, sẽ ủng hộ tiếp!", rating: 5, verified: true, likes: 20 },
  { id: 6, user: null, content: "Tệ quá", rating: 1, verified: false, likes: 0 },
  { id: 7, user: "Em", content: "Bình thường", rating: 3, verified: true, likes: 1 },
];

// Hàm 1
function isValidComment(comment) {
    if (typeof comment.user !== "string" || comment.user.trim() === "") {
        return false;
    }
    if (typeof comment.content !== "string" || comment.content.trim().length < 5) {
        return false;
    }
    if (typeof comment.rating !== "number" || comment.rating < 1 || comment.rating > 5) {
        return false;
    }
    return true;
}

// Hàm 2
function filterValidComments(comments) {
    var result = [];
    for (var i = 0; i < comments.length; i++) {
        if (isValidComment(comments[i])) {
            result.push(comments[i]);
        }
    }
    return result;
}

// Hàm 3

function getCommentStats(validComments) {

    var total = validComments.length;
    var totalRating = 0;
    var totalLikes = 0;
    var verifiedCount = 0;
    var topComment = validComments[0];

    for (var i = 0; i < validComments.length; i++) {

        totalRating += validComments[i].rating;
        totalLikes += validComments[i].likes;

        if (validComments[i].verified) {
            verifiedCount++;
        }

        if (validComments[i].likes > topComment.likes) {
            topComment = validComments[i];
        }

    }

    return {
        total: total,
        avgRating: Number((totalRating / total).toFixed(1)),
        totalLikes: totalLikes,
        verifiedCount: verifiedCount,
        topComment: topComment
    };

}

// Hàm 4
function formatComment(comment) {

    var stars = "⭐".repeat(comment.rating);

    var user = comment.user ?? "Ẩn danh";

    if (comment.verified) {
        user += " ✓";
    }

    return `${stars} | ${user} | ${comment.content} | 👍 ${comment.likes}`;

}

// Test case

console.log(isValidComment(comments[0]));
console.log(isValidComment(comments[1]));
console.log(isValidComment(comments[3]));
console.log(isValidComment(comments[5]));

var validComments = filterValidComments(comments);

console.log(validComments);

console.log(getCommentStats(validComments));

console.log(formatComment(comments[0]));
console.log(formatComment(comments[2]));
console.log(formatComment(comments[6]));

