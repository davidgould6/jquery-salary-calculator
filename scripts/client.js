$(document).ready(onReady);
let inputInfo = [/*{
    firstName: 'Michael',
    lastName: 'Scott',
    idNumber: 123,
    jobTitle: 'Branch Manager',
    annualSalary: 1200
}
,{
    firstName: 'Master',
    lastName: 'Yoda',
    idNumber: 345,
    jobTitle: 'Master Jedi',
    annualSalary: 1200
}*/];
//let delButton = false;
// found rounding number to closest hundredth from https://stackoverflow.com/questions/14968615/rounding-to-the-nearest-hundredth-of-a-decimal-in-javascript
const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
}

function tempDeleteFromArray(){

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
    $(document).on('click', '#submitButton', emptyFields);
    $(document).on('click','#deleteButton', deleteStuff);
}

function salaryAdder(){
    let totalCosts = 0;
    for(let i = 0; i < inputInfo.length; i++){
        let numberOfAnnual = inputInfo[i].annualSalary;
        let monthlyPay = Number(numberOfAnnual);
        let dividedByTwelve = monthlyPay/12;
        totalCosts += dividedByTwelve; 
        let el = $('.displayMonthlyCost');
        el.empty();
        el.text('Monthly costs are: $' + roundToHundredth(totalCosts) );
        if(totalCosts > 20000){
            $('.displayMonthlyCost').attr('id', 'overBudget');
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

    $('#actualTable').append(`<tr id="trTest">
    <td class="borderStyle">${employeeObj.firstName}</td>
    <td class="borderStyle">${employeeObj.lastName}</td>
    <td class="borderStyle">${employeeObj.idNumber}</td>
    <td class="borderStyle">${employeeObj.jobTitle}</td>
    <td class="borderStyle" id="grabAnnualSalary">${employeeObj.annualSalary}</td>
    <td><button id="deleteButton">Delete</button></td>
    </tr>`);
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
I'm running into a scope issue that doesn't get me into the conditional... for the stretch goal since my total is declared inside a function...
I was trying to use mouse down and mouse up to change the delButton to either true or false but after release it just defaulted back to 
the global...
*/

/*function delButtonTrue(){
    let delButton = true;
    salaryAdder();
    console.log('delButtonTrue', delButton);
}
function delButtonFalse(){
    let delButton = false;
    console.log('delButtonFalse', delButton);
}

New logic path / idea for stretch goal...
Reloop through the array...
    [x]-->declare variable = that is the total of all annual prices from the array...
        [x]--> create a conditional 
            --> if( inputInfo[i].annualSalary === $(this).parent().parent())
                --> declare another variable = subtract inputInfo[i].annualSalary from total/ variable we declared earlier
                    --> Now we have the updatedTotal ... Delete Object from array
                        -->Grab updatedTotal divide by 12 ... .text() it to the monthly costs.
                        [] make sure red style works. :)
*/

function deleteStuff(){
    console.log('in delete stuff')
    let startingTempTotal = 0;
    let thisTest = $(this).parent().parent().children('#grabAnnualSalary').text();
    //newestTest = thisTest.children('#grabAnnualSalary').text();
    console.log('here is our test', Number(thisTest));

    for( let i = 0; i < inputInfo.length; i++){
        let tempTotal = startingTempTotal += Number(inputInfo[i].annualSalary);
        console.log('this is tempTotal', tempTotal);
        // Grab data of annual salary that is in the table... convert to number then subtract from startingTempTotal...
        if(tempTotal === Number(thisTest)){
            console.log('hey the logic works and you are in the conditional.')
        }
    }
    //$(this).closest("tr").remove();
}
    

