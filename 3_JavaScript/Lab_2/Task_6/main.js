let size;
do{
    size = Number(prompt("Enter the size of the array"));
}while(isNaN(size));

let arr = new Array(size);

let i = 0;

do{
    let num = Number(prompt(`Enter number ${i+1}`));
    if(isNaN(num))
        continue;

    arr.push(num);
    i++;

}while(i < size);

let flag = true;
while(flag){
    
    let char = prompt(`

    (a) : to display array with the same receiving order
	(b) : to display array with ascending order
	(c) : to display array with descending order
	(d) : to reversed version of original array 
	(e) : to display even numbers only from array if there no even numbers , display alert to inform user with that
	(f) : receive number from user then display all numbers from array which divisible by received number , if there no result inform user with that
	(g) : display new array with 30% discount for all numbers in original array
	(h) : display string which represent all numbers of array concated with ***

    `);

    switch(char){

        case 'a':
            alert(`Array: ${arr}`);
            document.write(`<h2>Array: ${arr}</h2>`);
            break;

        case 'b':
            let arr1 = arr.map(n => n);
            alert(`Sorted ascending array: ${arr1.sort((a, b) => a - b)}`);
            document.write(`<h2>Sorted ascending array: ${arr1.sort((a, b) => a - b)}</h2>`);
            break;

        case 'c':
            let arr2 = arr.map(n => n);
            alert(`Sorted descending array: ${arr2.sort((a, b) => b - a)}`);
            document.write(`<h2>Sorted descending array: ${arr2.sort((a, b) => b - a)}</h2>`);
            break;

        case 'd':
            let arr3 = arr.map(n => n);
            alert(`Reversed array: ${arr3.reverse()}`);
            document.write(`<h2>Reversed array: ${arr3.reverse()}</h2>`);
            break;

        case 'e':
            let even = arr.filter(n => n % 2 == 0);
            if(even.length == 0){
                alert("No even numbers in your array!");
                document.write("<h2>No even numbers in your array!</h2>");
            }
            else{
                alert(`Even numbers: ${even}`);
                document.write(`<h2>Even numbers: ${even}</h2>`);
            }
            break;

        case 'f':
            let num = Number(prompt("Enter a number to divide by"));
            let arr4 = arr.filter(n => n % num == 0);
            if(arr4.length == 0){
                alert(`No numbers divisible by ${num} in your array!`);
                document.write(`<h2>No numbers divisible by ${num} in your array!</h2>`);
            }
            else{
                alert(`Numbers divisible by ${num}: ${arr4}`);
                document.write(`<h2>Numbers divisible by ${num}: ${arr4}</h2>`);
            }
            break;

        case 'g':
            let discounted = arr.map(n => (n * 0.7).toFixed(2));
            alert(`Discounted array by 30% : ${discounted}`);
            document.write(`<h2>Discounted array by 30% : ${discounted}</h2>`);
            break;

        case 'h':
            let str = arr.join("***");
            alert(`Concated elements: ${str}`);
            document.write(`<h2>Concated elements: ${str}</h2>`);
            break;

        default:
            alert("You entered wrong choice!");
            break;
    }
    flag = confirm("Do you want to continue?");
}


