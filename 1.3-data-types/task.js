"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    const months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    if (isNaN(percent)) {
        console.log(`Параметр 'Процентная ставка' содержит неправильное значение ${percent}`);
    } 
    if (isNaN(contribution)) {
        console.log(`Параметр 'Начальный взнос' содержит неправильное значение ${contribution}`);
    } 
    if (isNaN(amount)) {
        console.log(`Параметр 'Общая строимость' содержит неправильное значение ${amount}`)
    }
    
    const mortgageBody = amount - contribution;
    const P = (1 / 12 * percent) / 100;
    const monthlyPayment = mortgageBody * (P + P / ((Math.pow((1 + P), months) - 1)));
    let totalAmount = monthlyPayment * months;
    totalAmount = Number(totalAmount.toFixed(2));
    return totalAmount;
}

function getGreeting(name) {
    const greeting = `Привет, мир! Меня зовут ${name || 'Аноним'}`
    return greeting;
}