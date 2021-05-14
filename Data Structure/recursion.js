// In computer science, a recursive function is a function that calls itself.
// Infinite recursive calls result in stack overflow.
// Stack overflow is when the maximum number of call stacks of the program exceeds the
// limited amount of address space (memory).
// For recursive functions to be implemente



const countDown = (num)=>{
    if(num<=0){
        return false
    }else{
        console.log(num)
        return countDown(num-1)
    }
}

const fibonacci = (num)=>{
    if(num <=1) return num

    return fibonacci(num-1)+fibonacci(num-2)
}

console.log(fibonacci(8))