//display number
function displayNumber(num) {
    console.log(num);
    result.value+=num
    
}
function cleartext() {
    result.value=" "
    
}
function lastdigit() {
    result.value=result.value.slice(0,-1)
}
function calculation() {
    result.value=eval(result.value)
    
}