"use strict"
function getResult(a,b,c) {
    // let coeff_1 = a;
    // let coeff_2 = b;
    // let coeff_3 = c;
    // let D = coeff_2** - 4 * coeff_1 * coeff_3;
    let D = b ** - 4 * a * c;
    let x = [];
    if (D < 0) {
        x = [];
    } else if (D === 0) {
        x.push(-1 * b / 2 * a);
    } else if (D > 0) {
        x.push((-1 * b - Math.sqrt(D)) / 2 * a);
        x.push((-1 * b + Math.sqrt(D)) / 2 * a); 
    }
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}