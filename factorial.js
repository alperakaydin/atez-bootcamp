//this function can calculate given parameters of range 0 - 18
function factorial(num){

    // Type and negative number controlling.
    if(typeof num === "string"){
        throw("Given parameters is string type. Please use number")
    }else if (num<0){
        throw("Given parameters is negative number. Please use positive number")
    }

    let result = 1
    for (let i = 2 ; i <= num; i++) {
        result = result * i;
    }

    if(Number.isSafeInteger(result)){
        return result
    }else{
        //
        throw("Given parameters is too large. Please use safety limit of number ")
    }
}
//TEST
console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(3)) // 6
console.log(factorial(18)) // 6402373705728000
