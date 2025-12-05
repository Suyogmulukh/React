function sum(...nums) {
    return nums.reduce(
        (total, n) => total + n
    );
}

console.log(sum(1, 2, 3, 4)); 
