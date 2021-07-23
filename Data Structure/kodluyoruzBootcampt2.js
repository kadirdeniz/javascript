const isOdd = (num)=>{
    if(num % 2 == 1){
        return true
    }
    return false
}

const splitInsideArr = str=>{
    return str.substr(1,str.length-2).split(",")
}


const makeArr = str=>{

    let arr = []

    const splittedArr  = str.split("\"")

    for(let x = 0 ; x<=splittedArr.length-1;x++){
        if(isOdd(x)){
            arr.push(splitInsideArr(splittedArr[x]))
        }
    }
    return arr
}



const add0ToArrays = (arr,length)=>{
    for(let x = arr.length; x<= length;x++){
        arr[x]=0
    }
    return arr
}

const joinArrays = (arr1,arr2)=>{
    let response = []
    for(let x = 0 ; x<= arr1.length-2; x++){
        response.push(parseInt(arr1[x])+parseInt(arr2[x]))
    }
    return response
}

const arrayMatching = (str)=>{
    let arr = makeArr(str)

    if(arr[0].length > arr[1].length){
        arr[1] = add0ToArrays(arr[1],arr[0].length)
    }else{
        arr[0] = add0ToArrays(arr[0],arr[1].length)
    }

    return joinArrays(arr[0],arr[1])
}

console.log(arrayMatching('[ "[5,2,3]" , "[2,2,3,10,6]" ]'))