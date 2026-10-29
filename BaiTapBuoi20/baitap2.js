function countGreaterThan(array, value) {
    let count = 0;
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] > value) count++;
    }
    return count;
}   

// Sample usage
console.log(countGreaterThan([1, 5, 7, 2, 3], 3)); // 2