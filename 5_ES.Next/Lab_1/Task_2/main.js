// Question 2
let calc = function(op, ...nums) {
    switch(op) {
        case '+':
            let sum = nums.reduce((a, b) => a + b);
            console.log(`Result of sum operation for ${nums} is ${sum}`);
            break;

        case '*':
            let mul = nums.reduce((a, b) => a * b);
            console.log(`Result of sum operation for ${nums} is ${mul}`);
            break;

        default:
            console.log("Wrong Operation");
            break;
    }
}

calc('+', 5, 10, 30);