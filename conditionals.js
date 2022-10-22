//level 3 Q1

let monthUserInput = prompt('How many days are in ?')
let month = monthUserInput.toLowerCase()
switch(month){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    console.log(`${month} has 31 days in a month`);
    break;
    
    case "april":
    case "june":
    case "september":
    case "november":
    console.log(`${month} has 30 days in a month`);
    break;

    case "february":
    console.log(`${month} has 28 days in a month`);
    break;

    default:
    console.log('it is not a month')
}

// Q2  considering leap year

let month1UserInput = prompt('How many days are in?')
let month1 = monthUserInput.toLowerCase()
switch(month){
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    console.log(`${month1} has 31 days in a month`);
    break;
    
    case "april":
    case "june":
    case "september":
    case "november":
    console.log(`${month1} has 30 days in a month`);
    break;

    case "february":
    console.log(`${month1} has 29 days in a month`);
    break;

    default:
    console.log('it is not a month')
}


