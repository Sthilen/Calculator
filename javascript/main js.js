var numberA = "";

var numberADone = false;

var numberB = "";

var operator = "";

var result = 0;

function button(val) {
    if (numberADone == false){
        switch(val) {
            case 1:
                numberA += "1";
                document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
                break;
            case 2:
                numberA += "2";
                document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
                break;
            case 3:
                numberA += "3";
                document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
                break;
            case 4:
                numberA += "4";
                document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
                break;
            case 5:
                numberA += "5";
                document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
                break;
            case 6:
                numberA += "6";
                document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
                break;
            case 7:
                numberA += "7";
                document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
                break;
            case 8:
                numberA += "8";
                document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
                break;
            case 9:
                numberA += "9";
                document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
                break;
            default:
                alert("no");
                break;
    }
    return numberA
} else {
    switch(val) {
        case 1:
            numberB += "1";
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case 2:
            numberB += "2";
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case 3:
            numberB += "3";
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case 4:
            numberB += "4";
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case 5:
            numberB += "5";
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case 6:
            numberB += "6";
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case 7:
            numberB += "7";
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case 8:
            numberB += "8";
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case 9:
            numberB += "9";
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        default:
            alert("no");
            break;
    }
    return numberB;
}
}

function operators(math) {
    switch(math) {
        case "+":
            numberADone = true;
            operator = "+"
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case "-":
            numberADone = true;
            operator = "-"
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case "*":
            numberADone = true;
            operator = "*"
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
        case "/":
            numberADone = true;
            operator = "/"
            document.getElementById("demo").innerHTML = numberA + " " + operator + " " + numberB;
            break;
    }
    return operator;
}

function results() {
    switch(operator) {
        case "+":
            result = parseInt(numberA) + parseInt(numberB);
            document.getElementById("demo").innerHTML = result;
            break;
        case "-":
            result = parseInt(numberA) - parseInt(numberB);
            document.getElementById("demo").innerHTML = result;
            break;
        case "*":
            result = parseInt(numberA) * parseInt(numberB);
            document.getElementById("demo").innerHTML = result;
            break;
        case "/":
            result = parseInt(numberA) / parseInt(numberB);
            document.getElementById("demo").innerHTML = result;
            break;
    }
}
function clear() {
    numberA = "";
    numberB = "";
    numberADone = false;
    operator = "";
    let equation = document.getElementById("demo");
    equation.innerHTML = " ";
    alert("Cleared");
}
