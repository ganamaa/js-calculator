// import * as operations from './operation.js';
//adding comment for the commit message
var numero1, numero2, result;
var option;

//ibamos bien el unico error era que no puede tener el mismo nombre que el id
//complete las otras operaciones con los que tenias
var operations = "operation.js";
function equalsOperation() {
    let num2 = document.getElementById('firstInput');
    numero2 = parseFloat(num2.value);
    switch (option) {
        case '+':
            result = numero1 + numero2;
            break;
        case '-':
            result = numero1 - numero2;
            break;
        case '*':
            result = numero1 * numero2;
            break;
        case '/':
            result = numero1 / numero2;
            break;
        case '^':
            result = numero1 ** numero2;
            break;
        case 'sqrt':
            result = numero1 ** (1 / numero2);
            break;
        default:
            alert(`Perdon, se espera una operacion ${option}.`);
    }
    num2.value = result;
    option = null;
}

function getNumber() {
    let num1 = document.getElementById('firstInput');
    numero1 = parseFloat(num1.value);
    num1.value = '';
}

function add() {
    getNumber()
    option = '+';
}

function substract() {
    getNumber()
    option = '-';
}

function divide() {
    getNumber()
    option = '/';
}

function multiply() {
    getNumber()
    option = '*';
}

function power() {
    getNumber()
    option = '^';
}

function sqrt() {
    getNumber()
    option = 'sqrt';
}


//the following are dummy numbers to check the functionality of the functions below


var array = [];
let i = 0;

// similar to python order matters revNum is inside the function outside the while loop

function bin() {
    getNumber();
    while (numero1 != 0) {
        modu = numero1 % 2;
        array.push(modu);
        numero1 = Math.floor(numero1 / 2);
    }
    result = array.reverse().join("");
    document.getElementById('firstInput').value = result;
    
}

//remember to call the function PLEASE!!!

// bin();
// alert(revNum2);
//-----------------------------------------

function octal() {
    getNumber();
    while (numero1 != 0) {
        modu = numero1 % 8;
        array.push(modu);
        numero1 = Math.floor(numero1 / 8);
    }
    result = array.reverse().join("");
    document.getElementById('firstInput').value = result;
    
}

// octal();
// alert(revNum8);
//---------------------------------------

function hexa() {
    getNumber();
    while (numero1 != 0) {
        modu = numero1 % 16;
        array.push(modu);
        numero1 = Math.floor(numero1 / 16);
    }
    revNum16 = array.reverse();
    for (i in revNum16) {
        if (revNum16[i] == 10) { revNum16[i] = `A`; }
        else if (revNum16[i] == 11) { (revNum16[i] = `B`); }
        else if (revNum16[i] == 12) { (revNum16[i] = `C`); }
        else if (revNum16[i] == 13) { (revNum16[i] = `D`); }
        else if (revNum16[i] == 14) { (revNum16[i] = `E`); }
    }
    
    document.getElementById('firstInput').value = revNum16.join('');
}

// hexa();
// alert(revNum16);

// plus.addEventListener('click', alert(10));
