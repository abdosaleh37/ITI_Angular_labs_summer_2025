let message = prompt("Enter a message to display");

for(let i = 1; i < 7; i++){
    document.write(`<h${i}>${message}</h${i}>`);
}

/* --------------------------------------------------------- */
let sum = 0, num = 0;
do{
    num = Number(prompt("Enter a number to add"));
    sum += num;
} while(sum <= 100 && num!= 0);

console.log(`Sum = ${sum}`);
document.write(`<h2>Sum = ${sum}</h2>`);
/* --------------------------------------------------------- */

