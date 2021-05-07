// Abstraction
/*
* In the context of programming, these kinds of vocabularies are usually called abstractions.
*  Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.*/


// Higher Order Functions : Functions that uses functions as a parameter
// Map , Filter , Reduce Functions are Some Examples of Higher Ordered Functions


// Filter Function Controls Every Value of the Array for the Given Condition
const filter = (arr,test)=>{
    const response = []
    for(let element of arr){
        if(test(element)){
            response.push(element)
        }
    }
    return response
}
// Map Function Makes Some Changes Every Element of Given Array
const map = (arr,transform)=>{
    const response = []
    for(let element of arr){
        response.push(transform(element))
    }
    return response
}
// Reduce Function Return Single Value of Given Array,That Maybe Sum , Length and etc
const reduce = (arr,combine,start)=>{
    let current = start
    for(let element of arr){
        current = combine(current,element)
    }
    return current
}

const numbers = [1,2,3,4,5,6,7,8,9]
console.log(filter(numbers,number=>number>5))
console.log(map(numbers,number=>number+1))
// Sum of Array
console.log(reduce(numbers,(a,b)=>{return a+b},0))
// Count Length of Array
console.log(reduce(numbers,a=>{return a+1},0))
// Average of Given Array
console.log(reduce(numbers,(a,b)=>{return (a+b)},0) / reduce(numbers,(a,b)=>{return a+1},0))
// ZINK

