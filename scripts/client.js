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
    <td class="borderStyle" id="firstName">${employeeObj.firstName}</td>
    <td class="borderStyle" id="lastName">${employeeObj.lastName}</td>
    <td class="borderStyle" id="idNumber">${employeeObj.idNumber}</td>
    <td class="borderStyle" id="jobTitle">${employeeObj.jobTitle}</td>
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
           [x] --> if( inputInfo[i].annualSalary === $(this).parent().parent()) **sort of did this.** 
                --> declare another variable = subtract inputInfo[i].annualSalary from total/ variable we declared earlier
                    --> Now we have the updatedTotal ... Delete Object from array
                        -->Grab updatedTotal divide by 12 ... .text() it to the monthly costs.
                        [] make sure red style works. :)
*/

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
    console.log(inputInfo);
}

function deleteStuff(){
    console.log('in delete stuff')
    let startingTempTotal = 0; 
     // grabs data from table.
    let firstNameCellGrab = $(this).parent().parent().children('#firstName').text();
    let lastNameCellGrab = $(this).parent().parent().children('#lastName').text();
    let idNumberCellGrab = $(this).parent().parent().children('#idNumber').text();
    let jobTitleCellGrab = $(this).parent().parent().children('#jobTitle').text();
    let annualSalaryCellGrab = $(this).parent().parent().children('#grabAnnualSalary').text(); 

    // let numberOfCellAnnualSalary = Number(annualSalaryCellGrab);                                // converts data from table into a number
    //console.log('here is what is in annual salary cell', numberOfCellAnnualSalary);             // console log to make sure it turns into a number
    for( let i = 0; i < inputInfo.length; i++){ 
        while( i < inputInfo.length-1){
            let firstNameIndex = inputInfo[i].firstName;
            let lastNameIndex = inputInfo[i].lastName;
            let idNumberIndex = inputInfo[i].idNumber;
            let jobTitleIndex = inputInfo[i].jobTitle;
            let annualSalIndex = inputInfo[i].annualSalary; // declaring a variable for index of .annualSalary
            /*console.log('this is firstNameIndex',firstNameIndex);
            console.log('this is lastNameIndex',lastNameIndex);
            console.log('this is idNumberIndex',idNumberIndex);
            console.log('this is jobTitleIndex',jobTitleIndex);
            console.log('this is annualSalIndex',annualSalIndex);
            console.log('this is inputInfo[i].annualSalary', inputInfo[i].annualSalary);
            console.log('this is startingTempTotal', startingTempTotal);*/                            // console log to make sure startingTempTotal = 0
                                   // declared firstAdjustedTempTotal to startingTempTotal adding annualSalIndex to get the total of annualSalary(s) in array
            //console.log('this is tempTotal', firstAdjustedTempTotal);                               // console log to make sure the addition works for total
            
            let otherAnnualSalUpdate = Number(annualSalIndex);
            console.log('otherAnnualSalUpdate',otherAnnualSalUpdate);
            let whatWeMinusFrom = startingTempTotal += otherAnnualSalUpdate;
            console.log('whatWeMinusFrom',whatWeMinusFrom);
            // Grab data of annual salary that is in the table... convert to number then subtract from startingTempTotal...
            if(
                firstNameIndex === firstNameCellGrab &&
                lastNameIndex === lastNameCellGrab &&
                idNumberIndex === idNumberCellGrab &&
                jobTitleIndex === jobTitleCellGrab &&
                annualSalIndex === annualSalaryCellGrab
                ){
                console.log('WE MADE IT!!!!!');
                let annualSalUpdate = Number(annualSalIndex); // turn annual salary into number
                console.log('this is annualSalUpdate', annualSalUpdate);
                let firstAdjustedTempTotal = whatWeMinusFrom - annualSalUpdate; 
                console.log('this is firstAdjustedTempTotal',firstAdjustedTempTotal )
                //let adjustedTotal = firstAdjustedTempTotal - annualSalUpdate;
                //console.log('this is ',adjustedTotal);
                let adjustedMonthlyCosts = firstAdjustedTempTotal / 12;
                console.log('this is adjustedMonthlyCosts', adjustedMonthlyCosts);
                //removes object from array on click of delete.
                inputInfo.splice(i,1);
                //append/text new total to '.displayMonthlyCost'
                let el = $('.displayMonthlyCost');
                el.empty();
                el.text('Monthly costs are: $' + roundToHundredth(adjustedMonthlyCosts));
            }
        }                                                // created a for loop to loop through array
        
    }
    $(this).parent().parent().remove();
    console.log(inputInfo);
}
    // ^^^^ with this running into a problem if I have duplicate annual salaries because of the conditional (annualSalIndex === numberOfCellAnnualSalary)
//saving for later let annualSalIndex = Number(inputInfo[i].annualSalary);

