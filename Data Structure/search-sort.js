// Linear Search can be using sorted and unsorted arrays
// Binary Search usgin for sorted arrays

// Linear Search has bigger complexity than binary

const arr = [1,2,3,4,5,6,7,8,9]

const linearSearch = (arr,n)=>{
    for(let x  of arr){
        if(x==n)
        return true
    }
    return false
}
// O(n)

console.log(linearSearch(arr,5)) // true
console.log(linearSearch(arr,10)) // false

const isMiddleSmaller = (middle,num)=>{
    return middle<num
}

// it must be sorted
const binarySearch = (arr,num)=>{
    
    const middle = Math.floor(arr.length/2)
    const middleValue = arr[middle]
    if(isMiddleSmaller(middleValue,num)){
        const newArr = arr.slice(middle,arr.length)
        if(linearSearch(newArr,num))
            return true
    }else{
        if(linearSearch(arr.slice(0,middle),num))
            return true
    }
    return false
}
console.log(binarySearch(arr,7))


// Sorting
const unsortedArr = [2,0,2,4,8,0,3,4,7,9,7,2]
// Bubble Sort O(n^2)
const bubleSort = (arr)=>{
    for(let i=0;i<=arr.length-1;i++){
        for(let j=i;j<=arr.length;j++){
            if(arr[i]<arr[j]){
                swap(arr,i,j)
            }
        }
    }
    return arr
}
const swap = (arr,i,j)=>{
    const temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
console.log(bubleSort(unsortedArr))

// Selection Sort
const selectionSort = (arr)=>{
    for(let i=0;i<=arr.length-1;i++){
        let min = i
        for(var j=i;j<=arr.length;j++){
            if(arr[j]<min){
                min=arr[j]
            }
            if(i!=min){
                swap(arr,i,min)
            }
        }
    }
    return arr
}
console.log(selectionSort(unsortedArr))