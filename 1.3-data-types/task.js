"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    // let fullYears = date.getFullYear() - new Date().getFullYear();
    // let fullMonths = date.getMonth() - new Date().getMonth();
    // let months = fullYears * 12 + fullMonths;
    let months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    console.log(months);
    if (isNaN(percent)) {
        console.log(`Параметр 'Процентная ставка' содержит неправильное значение ${percent.valueOf()}`);
    } 
    if (isNaN(contribution)) {
        console.log(`Параметр 'Начальный взнос' содержит неправильное значение ${contribution.valueOf()}`);
    } 
    if (isNaN(amount)) {
        console.log(`Параметр 'Общая строимость' содержит неправильное значение ${amount.valueOf()}`)
    }
    
    let mortgageBody = amount - contribution;
    let P = (1 / 12 * percent) / 100;
    let monthlyPayment = mortgageBody * (P + P / ((Math.pow((1 + P), months) - 1)));
    let totalAmount = monthlyPayment * months;
    totalAmount = totalAmount.toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}