function addition(a, b) {
    return a + b
}
console.log(addition(2,4))

function multiply(x, y) {
let result = 0;
let count = 0;

while (count < y) {
    result += addition(x, 0);
    count += 1;
}
    
return result;
}

let x = addition(6, 4);
let product = multiply(6,4);

console.log(product);

function power(p, q) {
    let theResult = 1;
    let count = 0;
    while (count < q) {
        theResult = multiply(p, theResult);
        count += 1;
    }  

    return theResult;
} 
 
console.log(power(2, 8)); 


function factorial(n) {
    let result = 1;
    
  
    while (count = 1) {
        count<=n;
        count ++;
    }
    result = multiply(n, result);
    return result;
} 
 
let n = 5;
 console.log(factorial5);

    

