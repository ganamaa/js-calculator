//adding comment for the commit message

var operation = "";
var numero1;
var numero2;
function add(){
    let num1 = document.getElementById('firstInput');
    numero1 = num1.value;
    num1.value = '';
    operation = "suma";
}

function equals(){
    console.log("llegue")
    let num2 = document.getElementById('firstInput');
    numero2 = num2.value;
    //document.getElementById('firstInput').value = parseInt(numero1+numero2);
    console.log(numero1);
}

// eventlstener en el + => leo el mismo inout 

function substract(num1,num2){
    return num1 - num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function power(num1,num2){
    return num1**num2;
}

function sqrt(num1,num2){
    return num1**(1/num2);
}

//the following are dummy numbers to check the functionality of the functions below

let num = 30;

var array = [];
i=0;

// similar to python order matters revNum is inside the function outside the while loop

function bin(){
    alert(2);
    while (num!=0){
        modu = num % 2;
        array.push(modu);
        num = Math.floor(num/2);
    }
    revNum2 = array.reverse();
}

//remember to call the function PLEASE!!!

// bin();
// alert(revNum2);
//-----------------------------------------

function octal(){
    alert(8);
    while (num!=0){
        modu = num % 8;
        array.push(modu);
        num = Math.floor(num/8);
    }
    revNum8 = array.reverse();
}

// octal();
// alert(revNum8);
//---------------------------------------

function hexa(){
    alert(16);
    while (num!=0){
        modu = num % 16;
        array.push(modu);
        num = Math.floor(num/16);
    }
    revNum16 = array.reverse();
    for (i in revNum16){
         if (revNum16[i] == 10) {revNum16[i] = `A`;}
         else if (revNum16[i] == 11) {(revNum16[i] = `B`);}
         else if (revNum16[i] == 12) {(revNum16[i] = `C`);}
         else if (revNum16[i] == 13) {(revNum16[i] = `D`);}
         else if (revNum16[i] == 14) {(revNum16[i] = `E`);}
    }
}

// hexa();
// alert(revNum16);

plus.addEventListener('click', alert(10));
