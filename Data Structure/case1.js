// Write a function that, given as integer N,returns the smallest integer greater than N,
// the sum of whose digits in twice as big as the sum of digits of N

// 1- Given N = 14 that returns 19. The sum of digits is twice as big as sum of digits of 14 (1+4=5)
// 2- Given N = 10, the function should return 11
// 3- Given N = 99, the function should return 9999

const number = 14

const getNumbersSum = (num)=>{
    const numString = String(num)
    let sumOfChar = 0
    for(let i =0;i<=numString.length-1;i++){
        sumOfChar+=parseInt(numString.charAt(i))
    }
    return sumOfChar
}

const findSmallestValue = (num)=>{
    const sumValue = getNumbersSum(num)
    for(let x=num;x<=10000;x++){
        if(getNumbersSum(x)==sumValue*2){
            return x
        }
    }
}

console.log(findSmallestValue(number))