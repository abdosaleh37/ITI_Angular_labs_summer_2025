
let child;
let params;
console.log(location.search)

function start(){
    params = new URLSearchParams(location.search);

    let name = params.get("userName");
    let age = Number(params.get("age"));
    let gender = params.get("gender");
    let color = params.get("color");

    child = window.open("hello.html", "_blank");

    child.document.write(`
        <img src="imgs/${gender}.jpg" alt="" style="vertical-align:middle;">
        <span style="font-weight:bold;">Welcome </span>
        <span style="color:${color};font-weight:bold;">${name}</span>
    `);
}


    



