let params = new URLSearchParams(location.search);

let name = params.get("userName");
let age = Number(params.get("age"));
let gender = params.get("gender");
let color = params.get("color");

document.body.innerHTML = `
    <img src="imgs/${gender}.jpg" alt="" style="vertical-align:middle;">
    <span style="font-weight:bold;">Welcome </span>
    <span style="color:${color};font-weight:bold;">${name}</span>`;



