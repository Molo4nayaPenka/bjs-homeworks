"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    let months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    console.log(months);
    if (isNaN(percent)) {
        console.log(`Параметр 'Процентная ставка' содержит неправильное значение ${percent}`);
    } 
    if (isNaN(contribution)) {
        console.log(`Параметр 'Начальный взнос' содержит неправильное значение ${contribution}`);
    } 
    if (isNaN(amount)) {
        console.log(`Параметр 'Общая строимость' содержит неправильное значение ${amount}`)
    }
    
    let mortgageBody = amount - contribution;
    let P = (1 / 12 * percent) / 100;
    let monthlyPayment = mortgageBody * (P + P / ((Math.pow((1 + P), months) - 1)));
    let totalAmount = monthlyPayment * months;
    totalAmount = Number(totalAmount.toFixed(2));
    return totalAmount;
}

function getGreeting(name) {
    let greeting = '';
    // let checkUndefined;
    // let checkNull = null;
    if (name) {
        greeting = `Привет, мир! Меня зовут ${name}`;
    } else if (name === undefined || name === null || name === name.charAt(9999)) {
        greeting = `Привет, мир! Меня зовут Аноним`;
    } 
    return greeting;
}