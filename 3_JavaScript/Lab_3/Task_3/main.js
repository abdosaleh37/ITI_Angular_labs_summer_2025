let params = new URLSearchParams(location.search);

let name = params.get("userName");
let age = Number(params.get("age"));
let gender = params.get("gender");
let color = params.get("color");

document.body.innerHTML = `
    <div style="width:50%;margin:10% auto;border:3px solid black;text-align:center">
        <img src="imgs/${gender}.jpg" alt="😊" style="vertical-align:middle;width:300px">
        <p style="font-weight:bold;">Welcome <span style="color:${color};font-weight:bold;">${name}</span></p>
    </div>`;



