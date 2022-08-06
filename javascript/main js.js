var numberA = "";

var numberAFinished = "";

var numberB = "";

operator = "";

var result = 0;

function button(val) {
    switch(val) {
        case 1:
            numberA += "1";
            break;
        case 2:
            numberA += "2";
            break;
        case 3:
            numberA += "3";
            break;
        case 4:
            numberA += "4";
            break;
        case 5:
            numberA += "5";
            break;
        case 6:
            numberA += "6";
            break;
        case 7:
            numberA += "7";
            break;
        case 8:
            numberA += "8";
            break;
        case 9:
            numberA += "9";
            break;
        default:
            alert("no");
            break;
    }
    return numberA
}

function operators(operator) {
    switch(operator) {
        case '+':
            numberAFinished = numberA;
            numberB = "";
            operator = "+"
            alert(numberAFinished)
            break;
        case "-":
            numberAFinished = numberA;
            numberB = "";
            operator = "-"
            break;
        case "*":
            numberAFinished = numberA;
            numberB = "";
            operator = "*"
            break;
        case "/":
            numberAFinished = numberA;
            numberB = "";
            operator = "/"
            break;
    }
    return numberAFinished && numberB && operator;
}

function button(val) {
    switch(val) {
        case 1:
            numberB += "1";
            break;
        case 2:
            numberB += "2";
            break;
        case 3:
            numberB += "3";
            break;
        case 4:
            numberB += "4";
            break;
        case 5:
            numberB += "5";
            break;
        case 6:
            numberB += "6";
            break;
        case 7:
            numberB += "7";
            break;
        case 8:
            numberB += "8";
            break;
        case 9:
            numberB += "9";
            break;
        default:
            alert("no");
            break;
    }
    return numberB
}

function results() {
    switch(operator) {
        case "+":
            result= parseInt(numberAFinished) + parseInt(numberB);
            alert(result);
            break;
        case "-":
            result= parseInt(numberAFinished) - parseInt(numberB);
            alert(result);
            break;
        case "*":
            result= parseInt(numberAFinished) * parseInt(numberB);
            alert(result);
            break;
        case "/":
            result= parseInt(numberAFinished) / parseInt(numberB);
            alert(result);
            break;
    }
}

function clear() {
    numberA = "";
    numberB = "";
    operator = "";
}
