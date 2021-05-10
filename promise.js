// <!-- PROMISES -->

// Js Promises Has 3 State : Pending , Resolve , Reject
// Reject for error
// Resolve for succes
// Pending for waiting to call

const kadir = require("./exportedModule")
console.log(kadir.isim())
console.log(kadir.soyisim())
console.log(kadir.yas())
// Promise
const multiply = (a,b)=>{
    return new Promise((resolve, reject)=>{

        if(Number.isInteger(a) && Number.isInteger(b))
            resolve(a*b)
        else
            reject("Doğru Parametreler ile Tekrar Deneyiniz")

    })
}

const summation = (a,b)=>{
    return new Promise((resolve, reject)=>{
        if(Number.isInteger(a) && Number.isInteger(b))
            resolve(a+b)
        else
            reject("Doğru Parametreler ile Tekrar Deneyiniz")
    })
}

const minus = (a,b)=>{
    return new Promise((resolve ,reject)=>{

        if(Number.isInteger(a) && Number.isInteger(b)){
            if(a>b)
                resolve(a-b)
            else
                resolve(b-a)
        }else {
            reject("Doğru Parametreler ile Tekrar Deneyiniz")
        }

    })
}

const fetch = require("node-fetch")

multiply(5,5)// Promise Pending
    .finally(()=>console.log("Promise Started")) // Promisi oto çalıştırır başarılı olup olmadığına bakmaz
    .then(result=>console.log(result)) // If Success Execute This (Full Filled)
    .catch(err=>console.log(err)) // If Catch Error Execute This (Rejected)

summation(10,20)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

minus(10,20)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

Promise.all([summation(5,10),minus(5,10),multiply(5,10)])
    .then(resultArr=>{
        console.log(resultArr[0])
        console.log(resultArr[1])
        console.log(resultArr[2])
        console.log(resultArr)
    })


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
        console.log(response[0])
    })

console.log(Number.isInteger(10))