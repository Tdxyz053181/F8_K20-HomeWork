// Hàm 1: createCalculator()

function createCalculator() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => {
            if (b === 0) {
                return "Lỗi: chia cho 0"
            }
            return a / b
        }
    }
}

const calculator = createCalculator();

console.log(calculator.add(2, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(3, 5));
console.log(calculator.divide(10, 2));
console.log(calculator.divide(10, 0));


// Hàm 2: average(...numbers)

function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

console.log(average(10, 20, 30));
console.log(average(5));
console.log(average());
console.log(average(1, 2, 3, 4, 5));


// Hàm 3: applyDiscount(price, discountPercent = 10)

function applyDiscount(price, discountPercent = 10) {
    if (typeof price !== 'number' || Number.isNaN(price)) {
        return 'Giá không hợp lệ';
    }

    let result = price - (price * discountPercent) / 100;
    return Math.floor(result);
}

console.log(applyDiscount(100000));
console.log(applyDiscount(100000, 20));
console.log(applyDiscount(100000, 0));
console.log(applyDiscount("abc", 10));
console.log(applyDiscount(NaN, 10));

// Hàm 4: safeCalculate(operation, ...numbers)

function safeCalculate(operation, ...numbers) {
    let result;

    if (operation === 'add') {
        result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
    } else if (operation === 'subtract') {
        result = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            result -= numbers[i];
        }
    } else if (operation === 'multiply') {
        result = 1;
        for (let i = 0; i < numbers.length; i++) {
            result *= numbers[i];
        }
    } else if (operation === 'average') {
        result = average(...numbers);
    } else {
        return "Phép tính không được hỗ trợ";
    }

    if (Number.isFinite(result) !== true) {
        return "Kết quả không hợp lệ";
    }

    return result;
}

console.log(safeCalculate("add", 1, 2, 3))
console.log(safeCalculate("multiply", 2, 3, 4))
console.log(safeCalculate("average", 10, 20))
console.log(safeCalculate("divide", 10, 2))
console.log(safeCalculate("add", 1, "abc", 3))