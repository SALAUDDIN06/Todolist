let number1 = document.getElementById("num1");
let number2 = document.getElementById("num2");
let result = document.getElementById("res")
addfun=()=>{
    result.innerText = `the result is ${parseFloat(number1.value) + parseFloat(number2.value)}`
}
subfun=()=>{
    result.innerText = `the result is ${parseFloat(number1.value) - parseFloat(number2.value)}`
}
mulfun=()=>{
    result.innerText = `the result is ${parseFloat(number1.value) * parseFloat(number2.value)}`
}
divfun=()=>{
    result.innerText = `the result is ${parseFloat(number1.value) / parseFloat(number2.value)}`
}