let image_name = prompt("Enter image name");
let text_color = prompt("Enter text color");

document.write(`<h5>This is your image</h5>`);
document.querySelector("h5").style.color = text_color;

document.write(`<img src="imgs/${image_name}" alt="image not found!">`);
img = document.querySelector("img");

img.style.width = "300px";
img.style.height = "200px";
img.style.borderColor = text_color;
img.style.borderWidth = "5px";
img.style.borderStyle = "solid";


