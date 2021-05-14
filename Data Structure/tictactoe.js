// Tik Tac Toe

const board = [["X","O","O"],["O","X","O"],["O","O","X"]]

const checkValues = (arr)=>{
    // Check Rows isEqual
    for(let row of arr){
        if(checkXorO(row)){
            return 1
        }
    }
    // Check Columns
    for(let col = 0;col<=2;col++){
        const column = [arr[0][col],arr[1][col],arr[2][col]]
        if(checkXorO(column)){
            return 1
        }
    }

    // Oyun Çapraz Bitebilir
    if(checkXorO([arr[0][0],arr[1][1],arr[2][2]])){
        return 1
    }else if(checkXorO([arr[0][2],arr[1][1],arr[2][0]])){
        return 1
    }

    return 0
}

const checkXorO = (arr)=>{
    return isAllX(arr) || isAllO(arr)
}
const isAllO = (arr)=>{
    return arr[0] == "O" && arr[1] == "O" && arr[2] == "O"
}
const isAllX = (arr)=>{
    return arr[0] == "X" && arr[1] == "X" && arr[2] == "X"
}
const isGameFinished = (arr)=>{
    if(checkValues(arr)){
        console.log("Game Finished")
    }else{
        console.log("Game Continious")
    }
}

isGameFinished(board)