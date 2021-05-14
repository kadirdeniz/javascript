const arr = [2,3,5,7,11]

console.log(5 in arr)
// JS objects are name indexes
// JS arrays are number indexes


// <!-- ARRAYS -->
console.log(arr.length)
console.log(arr[0])
console.log(arr["length"])


console.log(arr)
console.log("Deleted Value "+arr.shift())
console.log(arr)
arr.unshift(100)

console.log("Index of 2 is : "+arr.indexOf(3))
console.log("Index of 2 is : "+arr.lastIndexOf(11))
console.log("Between values :"+ arr.slice(0,3))

const newArr = []

newArr["name"] = "Kadir"
newArr["surname"] = "Deniz"
console.log(newArr.name.toUpperCase())

console.log(newArr)
newArr.push("DenemeValue")
console.log(newArr)
console.log(newArr[0])
newArr.pop()
console.log(newArr)

// <!-- OBJECTS -->


const firstObject = {
    squirrel:false,
    events:["ekle","oku","güncelle","sil"]
}
console.log(firstObject.events[0])
firstObject.kitap = "Silmarillon"
console.log(firstObject)

console.log("kitap" in firstObject) // True
delete firstObject.kitap
console.log(typeof delete firstObject.kitap)
console.log("kitap" in firstObject) // False

console.log(Object.keys(firstObject))
Object.assign(firstObject,{name:"Silmarillion",Author:"Tolkien"})
console.log(Object.keys(firstObject))

// String
const str = "Çok Önemli    Bir Metin  Yazısı     Bu"
console.log(str)
console.log(str.length)
console.log(str.trim())
console.log(str.trim().toUpperCase())
console.log(str.trim().indexOf("ir"))


// Exerices

const range = (start,end,step=1)=>{
    const arr = []
    for(let i = start;i<=end;i+=step){
        arr.push(i)
    }
    return arr;
}
const sum = (arr)=>{
    let sum = 0
    arr.forEach((each)=>{
        sum+=each
    })
    return sum
}
const reverse = (arr)=>{
    const result = []
    for(let i = arr.length;i>0;i-=1){
        result.push(i)
    }
    return result;
}

console.log(range(1,5))
console.log(reverse(range(1,5)))


// Types Of Iterations
// For in

for(let i in arr){
    console.log(arr)
}

// For of 

for(let x of arr){
    console.log(x)
}

// Foreach