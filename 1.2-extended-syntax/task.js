"use strict"
function getResult(a,b,c) {
    let D = Math.pow(b, 2) - 4 * a * c;
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
    let averageMark = 0;
    if (marks.length === 0)  {
        return averageMark;
    } else if (marks.length > 5) {
        console.log("введено более 5 аргументов, лишние будут удалены");
        marks = marks.slice(0, 5);
    }
    let sum = 0;
    for (let i=0; i < marks.length; i++) {
        sum += marks[i];
    }
    averageMark = sum / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}