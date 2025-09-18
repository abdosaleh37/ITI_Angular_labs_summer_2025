let buttons = document.querySelectorAll('input');
let div = document.getElementById('data');

let textButton = buttons[0];
let htmlButton = buttons[1];
let jsonButton = buttons[2];
let exJson = buttons[3];
let pagination = buttons[4];


// Text File
textButton.addEventListener('click', async function() {
    let response = await fetch("test.txt");
    let data = await response.text();
    
    div.innerText = data;
}); // End of Text File


// HTML File
htmlButton.addEventListener('click', async function() {
    let response = await fetch("test.html");
    let data = await response.text();

    div.innerHTML = data;
}); // End of HTML File


// Internal JSON File
jsonButton.addEventListener('click', async function() {
    let response = await fetch("test.json");
    let data = await response.json();

    let table = document.createElement('table');

    for(let obj of data) {
        let row = document.createElement('tr');

        for(let key in obj) {
            let col = document.createElement('td')
            col.innerText = obj[key];
            row.appendChild(col);
        }

        table.appendChild(row);
    }
    div.innerHTML = '';
    div.appendChild(table);

}); // End of Internal JSON File


// Extrnal JSON Data Without Pagination
exJson.addEventListener('click', async function() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();

    let table = document.createElement('table');

    for(let obj of data) {
        let row = document.createElement('tr');

        for(let key in obj) {
            let col = document.createElement('td')
            col.innerText = obj[key];
            row.appendChild(col);
        }

        table.appendChild(row);
    }
    div.innerHTML = '';
    div.appendChild(table);

}); // End of External JSON 


// External JSON Data With Pagination
pagination.addEventListener('click', async function() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();

    let paginationButtons = document.createElement('div');

    for(let i = 0; i < Math.floor(data.length / 10); i++) {
        let button = document.createElement('input');
        button.type = "button";
        button.value = i + 1;
        paginationButtons.appendChild(button);
    } 

    div.innerHTML = '';
    div.appendChild(paginationButtons);

    let btns = paginationButtons.querySelectorAll("input");
    let table = document.createElement('table');
    loadData(1, table, data);

    for(let btn of btns) {
        btn.addEventListener('click', function() {
            loadData(btn.value, table, data);
        });
    }
    div.appendChild(table);
}); // End Of Pagination


// Helper function to load data of a page
function loadData(page, table, data) {
    let start = (page - 1) * 10;
    let end = start + 10;
    table.innerHTML = '';

    for(let i = start; i < end; i++) {
        let row = document.createElement('tr');

        for(let key in data[i]) {
            let col = document.createElement('td')
            col.innerText = data[i][key];
            row.appendChild(col);
        }

        table.appendChild(row);
    }
}

