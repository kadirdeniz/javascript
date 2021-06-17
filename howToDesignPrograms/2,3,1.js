/*
exercise 2.3.1. Utopia's tax accountants always use programs that compute
income taxes even though the tax rate is a solid, never-changing 15%.
Define the program tax, which determines the tax on the gross pay.
Also define netpay. The program determines the net pay of an employee from
the number of hours worked. Assume an hourly rate of $12.
*/

const tax = (income)=>{
    return income * 15 / 100
}

const netPay = (hoursWorked)=>{
    return hoursWorked * 12
}