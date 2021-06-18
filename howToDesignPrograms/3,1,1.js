/*
Imagine the owner of a movie theater who has complete freedom in setting ticket prices. The
more he charges, the fewer the people who can afford tickets. In a recent experiment the owner
determined a precise relationship between the price of a ticket and average attendance. At a price
of $5.00 per ticket, 120 people attend a performance. Decreasing the price by a dime ($.10)
increases attendance by 15. Unfortunately, the increased attendance also comes at an increased
cost. Every performance costs the owner $180. Each attendee costs another four cents ($0.04).
The owner would like to know the exact relationship between profit and ticket price so that he
can determine the price at which he can make the highest profit.
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

console.log(profit(revenue(numberOfAttendance(ticketPrice),ticketPrice/100)))