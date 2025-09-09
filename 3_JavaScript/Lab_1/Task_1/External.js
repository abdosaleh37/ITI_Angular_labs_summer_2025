console.log(number1); // undefined

var number1 = 3; // error if var is deleted
var number2 = 2.9;
var number3 = 0xff;

var firstName = "Abdo";
var middleName = 'Mohamed';
var lastName = `Saleh`;

var flag = true;

console.log("This is the External JavaScript file.");

// -------------------------------------------------------------

// changing the value of any variable will change it until rerun.

console.log(firstName); // Abdo
firstName[3] = 'A';
console.log(firstName); // Abdo

console.log(typeof number1); // number
console.log(typeof number2); // number
console.log(typeof number3); // number
console.log(typeof firstName); // string
console.log(typeof middleName); // string
console.log(typeof lastName); // string

// --------------------------------------------------------------

var num1 = 3;
console.log((num1%2 == 0) ? "Even" : "Odd"); // Odd
// --------------------------------------------------------------

for(let i = 1; i <= 10; i++)
{
    console.log(i);
}
// console.log('**********************************',i)
// --------------------------------------------------------------
var num2 = -15;
if(num2 > 0)
    console.log("+ve");
else if(num2 < 0)
    console.log("-ve");
else
    console.log("zero");
// --------------------------------------------------------------
var num3 = 7;
for(let i = 1; i < 13; i++){
    console.log(`${num3} * ${i} = ${num3*i}`);
}
// --------------------------------------------------------------
var day = 4;
switch(day)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}
// -----------------------------------------------------------------
var day2 = 3;
if(day2 == 6 || day2 == 7)
    console.log("Weekend");
else
    console.log("Weekday");