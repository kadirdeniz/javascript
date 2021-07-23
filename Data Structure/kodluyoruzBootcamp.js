
const isInt = (n)=> {
    return n % 1 === 0;
 }

const powerOfTwo = (num)=>{
    return isInt(Math.sqrt(num))
}


console.log(powerOfTwo(9))