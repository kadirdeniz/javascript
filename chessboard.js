// For satır 8
// For sütun 8
// if satır%2 = 1 ise baştan
// elseif satır%2 = 0 bir satır atla

let result="";
const chessBoard = function(row){
    const column = row/2
    for(let i =1;i<=row;i++){
        for(let j=1;j<=column;j++){
            if(i%2==0){
                result +="# "
            }else if(i%2==1){
                result+=" #"
            }
        }
        result+="\n"
    }
    return result
}
//console.log(chessBoard(8))
//DONE

// <!-- Arrow Function -->
const square = (x)=>{return x*x}
const easySquare = x => x*x;

console.log(square(4))//16
console.log(easySquare(4))//16

console.log(easySquare(4,"kadir","deniz"))//ignore other params

const power = (base,exponenet = 2)=>{
    let result = 1;
    for (let i = 1; i<= exponenet;i++){
        result *= base;
    }
    return result
}

console.log(power(3,3))// Ignore exponent param 2 and set it 3
console.log(power(3))// set it 2 as exponenet


// <!-- Closures -->

// treated functions as value

const multiplier = (factor)=>{
    return number=>number*factor
}
// ilginx
let twice = multiplier(2)
console.log(twice(5))


// <!-- recursion -->
/*
* Therefore, always start by writing something that’s correct and easy to understand.
*  If you’re worried that it’s too slow—which it usually isn’t since most code simply isn’t
* executed often enough to take any significant amount of time—you can measure afterward and improve it if necessary.
* */

/*
* A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example,
* it doesn’t read global bindings whose value might change.*/

const min = (a,b)=>{
    if(a>b){
        return b
    }else if(a<b){
        return a
    }else{
        return 1
    }
}
console.log(min(3,2))

