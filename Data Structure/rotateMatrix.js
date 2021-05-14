// Rotate given matrix for x axis

const matrix = [[1,1,1],[0,0,1],[1,0,1]]


const rotateByX = (arr)=>{
    const response = []

    for(let x = arr.length-1;x>=0;x--){
        response.push(arr[x])
    }
    return response
}


console.log("Matrix")
matrix.map(element=>console.log(element))
console.log("Rotated X Matrix")
rotateByX(matrix).map(element=>console.log(element))
