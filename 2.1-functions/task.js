'use strict'

//1st task
function getSolutions(a = 0, b = 0, c = 0) {
    const D  = (b ** 2) - 4 * a * c;
    let roots = [];
    if (D === 0) {
        const x1 = -b / 2 * a;
        roots.push(x1);
    } else if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / 2 * a;
        const x2 = (-b - Math.sqrt(D)) / 2 * a;
        roots.push(x1, x2);
    }

    return {
        D,
        roots
    }
}

getSolutions(1, 2, 3);

function showSolutionsMessage(a = 0, b = 0, c = 0) {
    const result = getSolutions(a, b, c);
    console.log('Вычисляем корни квадратного уравнения ax² + bx + c');
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень. X₁ = ${result.roots[0]}`);
    } else if (result.roots.length === 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else {
        console.log('Уравнение не имеет вещественных корней');
    }
}

showSolutionsMessage(1, 2, 3);


// 2nd task
function getAverageScore(data) {
    const averageScore = {};
    for (let prop in data) {
        averageScore[prop] = getAverageMark(data[prop]);
    }

    let averageMarks = [];
    for (let mark in averageScore) {
        averageMarks.push(averageScore[mark]);
    }

    averageScore.average = getAverageMark(averageMarks);
    
    return averageScore;
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i=0; i < marks.length; i++) {
        sum += marks[i];
    }
    if (!sum) {
        return 0;
    }
    return sum / marks.length;
}

console.log(getAverageScore({
    algebra: [2, 5, 4, 3, 5, 4],
    geometry: [4, 5, 5, 5, 4],
    russian: [3, 3, 3, 5, 4, 4, 5],
    physics: [5, 4, 3],
    music: [4],
    english: [4, 4, 4, 3, 5, 5],
    poetry: [5, 5, 4, 3],
    chemistry: [2, 4, 3],
    french: [2, 3],
}));


//third task
function getPersonData(secretData) {
    let personData = {};
    for (let prop in secretData) {
        personData[prop] = getDecodedValue(secretData[prop]);
    }
    
    return {
        firstName: personData.aaa,
        lastName: personData.bbb,
    }
}

function getDecodedValue(secret) {
    let decodedValue;
    if (secret === 0) {
        decodedValue = 'Родриго';
    } else {
        decodedValue = 'Эмильо';
    }
    return decodedValue;
}

console.log(getPersonData({
  aaa: 0,
  bbb: 0,
}));