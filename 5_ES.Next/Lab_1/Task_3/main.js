// Question 3
let projectId = Number(prompt("Enter project Id : "));
while((projectId == null) || isNaN(projectId) || (projectId <= 0)) {
    projectId = Number(prompt(`Please enter a valid number for project Id : `));
}

let projectName = prompt("Enter project Name : ");
while((projectName == null) || projectName.trim() == "") {
    projectName = prompt("Please enter a valid project Name : ");
}

let duration = prompt("Enter project duration in days : ");
while((duration == null) || isNaN(duration) || (duration <= 0)) {
    duration = Number(prompt(`Please enter a valid number for project duration in days : `));
}

const obj = {
    projectId: projectId,
    projectName: projectName,
    duration: duration,
    printData: function() {
        console.log(`Project Id = ${this.projectId}`);
        console.log(`Project Name = ${this.projectName}`);
        console.log(`Project duration = ${this.duration}`);
    }
}

obj.printData();