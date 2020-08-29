$(document).ready(onReady);
let inputInfo = [/*{
    firstName: 'David',
    lastName: 'Gould',
    idNumber: 12,
    jobTitle: 'Student',
    annualSalary: 19996
},
{
    firstName: 'Yoda',
    lastName: 'None',
    idNumber: 1,
    jobTitle: 'Master Jedi',
    annualSalary: 3
}*/
];


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
    $('.userInputs').append(`<input type="text" id="firstName" placeholder="First Name">`);
    $('.userInputs').append(`<input type="text" id="lastName" placeholder="Last Name">`);
    $('.userInputs').append(`<input type="number" id="employeeNumber" placeholder="Employee ID Number">`);
    $('.userInputs').append(`<input type="text" id="jobTitle" placeholder="Job Title">`);
    $('.userInputs').append(`<input type="number" id="annualSalary" placeholder="Annual Salary">`);
    $('.userInputs').append(`<button id="submitButton">Submit</button>`);
    $('#headOfTable').append(`
    <th>First Name</th>
    <th>Last Name</th>
    <th>ID</th>
    <th>Title</th>
    <th>Annual Salary</th>`
    );
}
function onReady(){
    console.log('JQ is ready.');
    loadStuff();
    $(document).on('click','#submitButton', emptyFields);
}
function salaryAdder(){
    let totalCosts = 0;
    for( let i = 0; i < inputInfo.length; i++){
        let numberOfAnnual = inputInfo[i].annualSalary
        totalCosts += Number(numberOfAnnual); 
    }
    let el = $('.displayMonthlyCost');
    el.empty();
    el.text('Monthly costs are: $' + totalCosts );
    if(totalCosts > 20000){
        $('.displayMonthlyCost').attr('id', 'overBudget');
    }
}
function submitInfo(){
    //console.log('handshake and stuff.');
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
    <td>${employeeObj.firstName}</td>
    <td>${employeeObj.lastName}</td>
    <td>${employeeObj.idNumber}</td>
    <td>${employeeObj.jobTitle}</td>
    <td>$${employeeObj.annualSalary}</td>
    </tr>`);
    salaryAdder();
}

// added a function to not allow submit if any field is empty...

