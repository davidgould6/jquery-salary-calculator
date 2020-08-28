$(document).ready(onReady);

function onReady(){
    console.log('JQ is ready.');
    loadStuff();
}

function loadStuff(){
    $('.userInputs').append(`<input type="text" id="firstName" placeholder="First Name">`)
    $('.userInputs').append(`<input type="text" id="lastName" placeholder="Last Name">`)
    $('.userInputs').append(`<input type="number" id="employeeNumber" placeholder="Employee ID Number">`)
    $('.userInputs').append(` <input type="text" id="jobTitle" placeholder="Job Title">`)
    $('.userInputs').append(`<input type="number" id="annualSalary" placeholder="Annual Salary">`)

}