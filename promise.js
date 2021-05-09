// <!-- PROMISES -->

// Js Promises Has 3 State : Pending , Resolve , Reject
// Reject for error
// Resolve for succes
// Pending for waiting to call

// Check Given Number Type
const isNumber = (number)=>{
    return typeof number == "number"
}

// Promise
const multiply = (a,b)=>{
    return new Promise((resolve, reject)=>{

        if(isNumber(a) && isNumber(b)){
            resolve(a*b)
        }
        else{
            reject("Doğru Parametreler ile Tekrar Deneyiniz")
        }

    })
}


const fetch = require("node-fetch")

multiply(5,5)// Promise Pending
    .finally(()=>console.log("Promise Started")) // Promisi oto çalıştırır başarılı olup olmadığına bakmaz
    .then(result=>console.log(result)) // If Success Execute This (Full Filled)
    .catch(err=>console.log(err)) // If Catch Error Execute This (Rejected)


fetch("https://api.github.com/users/hadley/orgs")
    .then(res=>{
        if(res.ok){
            return res
        }else{
            throw new Error("Bir Hata Meydana Geldi")
        }
    })
    .then(data=>{
        return data.json()
    }).then(response=>{
        console.log(response)
    })