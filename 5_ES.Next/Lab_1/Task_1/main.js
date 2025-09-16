// Question 1
let numbers = [20, 5, 112, 67, 16, 92, 35];
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

let filtered = numbers.filter(n => n > 50);
console.log(filtered);

let max = Math.max(...numbers);
console.log(max);

let min = Math.min(...numbers);
console.log(min);