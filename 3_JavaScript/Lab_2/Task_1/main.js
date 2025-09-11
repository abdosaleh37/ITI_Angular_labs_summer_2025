let x = Number(prompt("Enter first number:"));
let y = Number(prompt("Enter second number:"));
let z = Number(prompt("Enter third number:"));

document.write(`
    <h1>Adding -- Multiplying -- and dividing 3 elements</h1>
    <hr>
    `);

document.write(`
    <span style="font-weight:bold">sum of the three values  </span>
    <span style="color:red">${x}+${y}+${z} = ${x+y+z}</span><br><br>
    <span style="font-weight:bold">multiplication of the three values  </span>
    <span style="color:red">${x}*${y}*${z} = ${x*y*z}</span><br><br>
    <span style="font-weight:bold">sumdivision of the three values  </span>
    <span style="color:red">${x}/${y}/${z} = ${x/y/z}</span><br><br>
    `);
