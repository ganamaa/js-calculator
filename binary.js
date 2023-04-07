let num = 30

const array = [];

function bin(){
    while (num!=0) {
        modi = num % 2;
        array.push(modi);
        num = Math.floor(num/2);
    }
}

while (num!=0) {
    modi = num % 2;
    array.push(modi);
    num = Math.floor(num/2);
}

console.log(array);
console.log(array.reverse());

//this is the octal while 

while (num!=0) {
    modi = num % 8;
    array.push(modi);
    num = Math.floor(num/8);
}
console.log(array);
console.log(array.reverse());

//this is the hex while


while (num!=0) {
    modi = num % 16;
    array.push(modi);
    num = Math.floor(num/16);
}
console.log(array);
console.log(array.reverse());

