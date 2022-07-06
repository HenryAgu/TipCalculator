const tip5Button = document.getElementById("tip-5");
const tip10Button = document.getElementById("tip-10");
const tip15Button = document.getElementById("tip-15");
const tip25Button = document.getElementById("tip-25");
const tip50Button = document.getElementById("tip-50");
const perPerson = document.getElementById("per-person");
const tipAmount = document.getElementById("tip-amount");

// tip5Button.addEventListener('click',forFivePercent)


// For Five Percent
function forFivePercent(){
    let bill = document.getElementById('bill').value;
    const fivePercent = ((5/100)* bill).toFixed(2);
    
    tipAmount.innerHTML = fivePercent

    let numberOfPeople = document.getElementById('no_of_people').value;
    const billForPersons = parseInt(bill) / parseInt(numberOfPeople);

    perPerson.innerHTML = billForPersons
}


// For Ten Percent
function forTenPercent(){
    let bill = document.getElementById('bill').value;
    const TenPercent = ((10/100)* bill).toFixed(2);
    
    tipAmount.innerHTML = TenPercent

    let numberOfPeople = document.getElementById('no_of_people').value;
    const billForPersons = parseInt(bill) / parseInt(numberOfPeople);

    perPerson.innerHTML = billForPersons
}

// For Fifteen Percent
function forFifteenPercent(){
    let bill = document.getElementById('bill').value;
    const FifteenPercent = ((15/100)* bill).toFixed(2);
    
    tipAmount.innerHTML = FifteenPercent

    let numberOfPeople = document.getElementById('no_of_people').value;
    const billForPersons = parseInt(bill) / parseInt(numberOfPeople);

    perPerson.innerHTML = billForPersons
}


// For Twenty Five Percent
function forTwentyFivePercent(){
    let bill = document.getElementById('bill').value;
    const TwentyFivePercent = ((25/100)* bill).toFixed(2);
    
    tipAmount.innerHTML = TwentyFivePercent

    let numberOfPeople = document.getElementById('no_of_people').value;
    const billForPersons = parseInt(bill) / parseInt(numberOfPeople);

    perPerson.innerHTML = billForPersons
}

// For Fifty Percent
function forFiftyPercent(){
    let bill = document.getElementById('bill').value;
    const FiftyPercent = ((50/100)* bill).toFixed(2);
    
    tipAmount.innerHTML = FiftyPercent

    let numberOfPeople = document.getElementById('no_of_people').value;
    const billForPersons = parseInt(bill) / parseInt(numberOfPeople);

    perPerson.innerHTML = billForPersons
}

// To reload your page when you click reset
function reloadPage(){
    window.location.reload(true);
}