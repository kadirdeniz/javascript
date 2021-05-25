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
    for(let x=num;x<=500;x++){
        if(getNumbersSum(x)==sumValue*2){
            return x
        }
    }
}

console.log(findSmallestValue(number))