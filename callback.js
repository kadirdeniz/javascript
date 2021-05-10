// Call Back Function
const multiplyCallback = (a,b,successCallback,rejectCallback)=>{
    if(Number.isInteger(a) && Number.isInteger(b)){
        successCallback(a*b)
    }else{
        rejectCallback("Girilen Değerler Hatalı")
    }
}


multiplyCallback(5,10,(result)=>{console.log(result)},(result)=>{console.log(result)})