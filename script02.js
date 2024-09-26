const divRoot = document.getElementById("root");

//sum calculator
const value1 = parseFloat(prompt("Inform a value"));
const value2 = parseFloat(prompt("Inform another value"));

const sum = value1 + value2;
const substract = value1 - value2;
const multiply = value1 * value2;
const divide = value1 / value2;
const rest = value1 % value2;

console.log(sum);
console.log(substract);
console.log(multiply);
console.log(divide);
console.log(rest);

const sumResult = document.createElement("span");
sumResult.textContent = value1 + "+" + value2 + "=" + sum;
const substractResult = document.createElement("span");
substractResult.textContent = value1 + "-" + value2 + "=" + substract;
const multiplyResult = document.createElement("span");
multiplyResult.textContent = value1 + "*" + value2 + "=" + multiply;
const divideResult = document.createElement("span");
divideResult.textContent = value1 + "/" + value2 + "=" + divide;
const restResult = document.createElement("span");
restResult.textContent = value1 + "%" + value2 + "=" + rest;

divRoot.appendChild(sumResult);
divRoot.appendChild(document.createElement("br"));
divRoot.appendChild(substractResult);
divRoot.appendChild(document.createElement("br"));
divRoot.appendChild(multiplyResult);
divRoot.appendChild(document.createElement("br"));
divRoot.appendChild(divideResult);
divRoot.appendChild(document.createElement("br"));
divRoot.appendChild(restResult);
