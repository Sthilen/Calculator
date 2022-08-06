// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//         return "It's true";
//     }
//     return "It's false";
// };

// console.log(trueOrFalse(true))

var numberA = "";

var numberB = "";

var result = 0;

function button() {
    switch(document.getElementsByClassName("numbers").value) {
        case "1":
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
    }
    return numberA
}

function math(operator) {
    switch(operator) {
        case "+":
            result = parseInt(numberA) + parseInt(numberB);
            break;
        case "-":
            result = parseInt(numberA) - parseInt(numberB);
            break;
        case "*":
            result = parseInt(numberA) * parseInt(numberB);
            break;
        case "/":
            result = parseInt(numberA) / parseInt(numberB);
            break;
    }
    return result;
}

console.log(numberA)