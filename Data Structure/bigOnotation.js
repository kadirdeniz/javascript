// Big O Notation gives us worst case scenerio of the algorithm
// How effective our algorithm is

// O(1) is constant time proceses and it is nearly nothing
// O(n) takes linear time process if n increase time also increase. writing all numbers for given n numbers array can be given example

const arr = [1,2,3,4,5,6,7,8,9]

console.log(arr[0]) // O(1) time process
const logElementsOfArr = arr.map(element=>{return element}) // n time O(1) equals O(n) time
console.log(logElementsOfArr)

const isPrime = (n)=>{
    if(n<=1){
        return false
    }

    for(let i = 2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

const allPrimesLessThen = (n)=>{
    const response= []
    if(n<=1){return 1}
    for(let i = 2;i<=n;i++){
        if(isPrime(i)){
            response.push(i)
        }
    }
    return response
}
console.log(isPrime(16)) // O(n)
console.log(allPrimesLessThen(20)) // O(n*n) = O(n^2)