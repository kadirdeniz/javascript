/*
Exercise 2.3.2. The local supermarket needs a program that can compute the value of a bag of 
coins. Define the program sum-coins. It consumes four numbers: the number of pennies, nickels, 
dimes, and quarters in the bag; it produces the amount of money in the bag.
*/


const pennies = (coins)=>{
    return Math.floor(coins / 1)
}

const nickels = (coins)=>{
    return Math.floor(coins / 5)
}

const dimes  = (coins)=>{
    return Math.floor(coins / 10)
}

const quarter = (coins)=>{
    return Math.floor(coins / 25)
}

const sumCoins = (coins)=>{
    const numberOfQuarter = quarter(coins)
    coins = coins - numberOfQuarter*25
    const numberOfDimes = dimes(coins)
    coins = coins - numberOfDimes * 10
    const numberOfNickels = nickels(coins)
    coins = coins - numberOfNickels * 5
    const numberOfPennies = pennies(coins)
    
    return {
        numberOfQuarter:numberOfQuarter,
        numberOfDimes:numberOfDimes,
        numberOfNickels:numberOfNickels,
        numberOfPennies:numberOfPennies
    }
}

console.log(sumCoins(17))