$(document).ready(onReady);
let inputInfo = [];
let delButton = false;
// found rounding number to closest hundredth from https://stackoverflow.com/questions/14968615/rounding-to-the-nearest-hundredth-of-a-decimal-in-javascript
const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
}

function deleteStuff(){
    console.log('in delete stuff')
    $(this).closest("tr").remove();

    console.log('delButton is at line 13', delButton);
}
function delButtonTrue(){
    let delButton = true;
    salaryAdder();
    console.log('delButtonTrue', delButton);
}
function delButtonFalse(){
    let delButton = false;
    console.log('delButtonFalse', delButton);
}

function emptyFields(){
    if(document.getElementById( 'firstName' ).value === ""){
        console.log( 'first name is empty' );
    }
    else if(document.getElementById( 'lastName' ).value === ""){
        console.log( 'last name is empty');
    }
    else if( document.getElementById('employeeNumber').value === "" ){
        console.log('employee number is empty');
    }
    else if( document.getElementById('jobTitle').value === "" ){
        console.log('job title is empty');
    }
    else if(document.getElementById('annualSalary').value === "" ){
        console.log('annual salary is empty')
    }
    else{
        submitInfo();
    }
}

function loadStuff(){
    $('#inputTable').append(`<th><input type="text" class="allInputItems" id="firstName" placeholder="First Name"></th>`);
    $('#inputTable').append(`<th><input type="text" class="allInputItems" id="lastName" placeholder="Last Name"></th>`);
    $('#inputTable').append(`<th><input type="number" class="allInputItems" id="employeeNumber" placeholder="Employee ID Number"></th>`);
    $('#inputTable').append(`<th><input type="text" class="allInputItems" id="jobTitle" placeholder="Job Title"></th>`);
    $('#inputTable').append(`<th><input type="number" class="allInputItems" id="annualSalary" placeholder="Annual Salary"></th>`);
    $('#inputTable').append(`<th><button class="allInputItems" id="submitButton">Submit</button></th>`);
    $('#headOfTable').append(`
    <th class="borderStyle">First Name</th>
    <th class="borderStyle">Last Name</th>
    <th class="borderStyle">ID</th>
    <th class="borderStyle">Title</th>
    <th class="borderStyle">Annual Salary</th>`
    );
}

function onReady(){
    loadStuff();
    $(document).on('mousedown', '#submitButton', delButtonFalse);
    $(document).on('mouseup', '#submitButton', emptyFields);
    $(document).on('mousedown','#deleteButton', delButtonTrue);
    $(document).on('mouseup','#deleteButton', deleteStuff);
}

function salaryAdder(){
    let totalCosts = 0;
    for( let i = 0; i < inputInfo.length; i++){
        if( delButton === false){
            console.log('delButton is false', delButton);
            let numberOfAnnual = inputInfo[i].annualSalary
            let monthlyPay = Number(numberOfAnnual)
            let dividedByTwelve = monthlyPay/12
            totalCosts += dividedByTwelve; 
            let el = $('.displayMonthlyCost');
            el.empty();
            el.text('Monthly costs are: $' + roundToHundredth(totalCosts) );
        }
        else if( delButton === true){
            console.log(`you've gotten into else if delButton === true`);
        }
    }
}

function submitInfo(){
    let employeeObj = {
       firstName: $('#firstName').val(),
       lastName: $('#lastName').val(),
       idNumber: $('#employeeNumber').val(),
       jobTitle: $('#jobTitle').val(),
       annualSalary: $('#annualSalary').val()
    }
    inputInfo.push(employeeObj);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    $('#actualTable').append(`<tr>
    <td class="borderStyle">${employeeObj.firstName}</td>
    <td class="borderStyle">${employeeObj.lastName}</td>
    <td class="borderStyle">${employeeObj.idNumber}</td>
    <td class="borderStyle">${employeeObj.jobTitle}</td>
    <td class="borderStyle">$${employeeObj.annualSalary}</td>
    <td><button id="deleteButton">Delete</button><td></tr>`);
    salaryAdder();
}
//if submit button is pressed set delButton to false
    //run salary adder conditional if ''delButton === false''
        //run code here...
//if del button is pressed set to true
    //run salary adder else if conditional ''delButton === true''
        // total costs--
// whenever delete button is pressed I need the boolean to be set to true
// whenever submit button is pressed I need the boolean to be set to false.

/*
I'm running into a scope issue that doesn't get me into the conditional...
*/