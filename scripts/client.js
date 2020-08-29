$(document).ready(onReady);
let inputInfo = [{
    firstName: 'David',
    lastName: 'Gould',
    idNumber: 12,
    jobTitle: 'Student',
    annualSalary: 1
},
{
    firstName: 'Yoda',
    lastName: 'None',
    idNumber: 1,
    jobTitle: 'Master Jedi',
    annualSalary: 3
}
];

function onReady(){
    console.log('JQ is ready.');
    loadStuff();
    $(document).on('click','#submitButton', submitInfo);
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
    $('.displayMonthlyCost').append(`<p>total costs</p>`) // make a note of this one. 
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
    <td>${employeeObj.annualSalary}</td>
    </tr>`);
    displayCost();
}

function displayCost(){
    let totalCosts = 0;
    for( let i = 0; i < inputInfo.length; i++){
        let numberOfAnnual = inputInfo[i].annualSalary
        totalCosts += Number(numberOfAnnual); 
    }
}