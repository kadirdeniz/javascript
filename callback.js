// Check Given Number Type
const isNumber = (number)=>{
    return typeof number == "number"
}

// Call Back Function

const multiplyCallback = (a,b,successCallback,rejectCallback)=>{
    if(isNumber(a) && isNumber(b)){
        successCallback(a*b)
    }else{
        rejectCallback("Girilen Değerler Hatalı")
    }
}


multiplyCallback(5,10,(result)=>{console.log(result)},(result)=>{console.log(result)})
