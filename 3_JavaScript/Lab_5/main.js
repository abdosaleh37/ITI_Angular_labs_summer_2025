const url = "http://localhost:3000/users";

const form = document.getElementById("usersForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");

const usersTable = document.getElementById("usersTable");
const usersTableBody = document.getElementById("usersTableBody");

// Initial Load
getUsers();

function getUsers() {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
        if(request.status === 200) {
            const users = JSON.parse(request.responseText);
            renderUsers(users);
        }
    };

    request.send();
}

function renderUsers(users) {
    usersTableBody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
            <button onclick='updateUser("${user.id}")'>Update</button>
            <button onclick='deleteUser("${user.id}")'>Delete</button>
        </td>
        `;
        usersTableBody.appendChild(row);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newUser = {
        name : nameInput.value,
        email: emailInput.value,
        role : roleInput.value
    };

    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.onload = function () {
        if (request.status === 201) {
            getUsers();
            form.reset();
        }
    };
    request.send(JSON.stringify(newUser));
});

function updateUser(id) {
    const updatedUser = {
        name: prompt("Enter new name:"),
        email: prompt("Enter new email:"),
        role: prompt("Enter new role:")
    };

    const request = new XMLHttpRequest();
    request.open("PUT", `${url}/${id}`, true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onload = function () {
        if (request.status === 200) {
            getUsers();
        }
    };
    request.send(JSON.stringify(updatedUser));
}

function deleteUser(id) {
    const request = new XMLHttpRequest();
    request.open("DELETE", `${url}/${id}`, true);
    request.onload = function () {
        if (request.status === 200) {
            getUsers();
        }
    };
    request.send();
}