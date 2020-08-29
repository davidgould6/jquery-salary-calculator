$(document).ready(onReady);
let inputInfo = [];

function deleteStuff(){
    console.log('hello, this is the delete button');
    $(this).closest("tr").remove();
    console.log(`totalCosts is ${totalCosts} `);
    //use .text()
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
    console.log('JQ is ready.');
    loadStuff();
    $(document).on('click','#submitButton', emptyFields);
    $(document).on('click', '#deleteButton', deleteStuff);
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
    <td class="borderStyle">${employeeObj.firstName}</td>
    <td class="borderStyle">${employeeObj.lastName}</td>
    <td class="borderStyle">${employeeObj.idNumber}</td>
    <td class="borderStyle">${employeeObj.jobTitle}</td>
    <td class="borderStyle">$${employeeObj.annualSalary}</td>
    <td><button id="deleteButton">Delete</button><td></tr>`);
    salaryAdder();
}