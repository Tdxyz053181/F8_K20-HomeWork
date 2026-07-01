function classifyTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Cạnh không hợp lệ";
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Không tạo thành tam giác"
    }

    if (a === b && b === c) {
        return "Tam giác đều"
    }

    if (a === b || a === c || b === c) {
        return "Tam giác cân"
    }

    let max = Math.max(a, b, c);

    if (
        (a * a + b * b === c * c) ||
        (a * a + c * c === b * b) ||
        (b * b + c * c === a * a)
    ) {
        return "Tam giác vuông";
    }

    // Tam giác thường
    return "Tam giác thường";
}

console.log(classifyTriangle(3, 4, 5));   // Tam giác vuông
console.log(classifyTriangle(2, 2, 2));   // Tam giác đều
console.log(classifyTriangle(1, 2, 10));  // Không tạo thành tam giác
console.log(classifyTriangle(2, 2, 3));   // Tam giác cân
console.log(classifyTriangle(4, 5, 6));   // Tam giác thường