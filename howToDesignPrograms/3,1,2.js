/*
Exercise 3.1.2. Use the results of exercise 3.1.1 to determine how much it costs to run a show
at $3.00, $4.00, and $5.00. Also determine how much revenue each show produces at those
prices. Finally, figure out how much profit the monopolistic movie owner can make with each
show. Which is the best price (of these three) for maximizing the profit?
 */


const ticketPrice = 300

const dimes  = (coins)=>{
    return Math.floor(coins / 10)
}

const profit = (revenue)=>{
    return revenue - 180
}

const numberOfAttendance = (money)=>{
    return 120 + dimes(500 - money) * 15
}

const revenue = (numberOfAttendance,ticketPrice)=>{
    return numberOfAttendance * ticketPrice
}

// For 3$
console.log(profit(revenue(numberOfAttendance(300),300/100))) // Best Option
// For 4$
console.log(profit(revenue(numberOfAttendance(400),400/100)))
// For 5$
console.log(profit(revenue(numberOfAttendance(500),500/100)))

// For 3$
console.log(revenue(numberOfAttendance(300),300/100))

// For 4$
console.log(revenue(numberOfAttendance(400),400/100))

// For 5$
console.log(revenue(numberOfAttendance(500),500/100))
