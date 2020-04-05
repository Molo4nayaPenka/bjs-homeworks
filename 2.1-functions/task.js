'use strict'
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
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.roots.length === 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else {
        console.log('Уравнение не имеет вещественных корней');
    }
}

showSolutionsMessage(1, 2, 3);

// почему, когда я писала roots = roots.push(x1)  (7 строка), возвращалась длина массива, а не сам массив? 
// я думала, что это будет происходить, когда я наоборот не переназначу roots (тот код, который в итоге вы
// сейчас видите).
// то есть вариант, который я считала неправильным, сработал и наоборот, "правильный" не сработал

// можно ли сделать так, чтобы те аргументы, которые я передаю в getSolutions, передавались и в showSolutionsMessage?
// или в реальной работе они автоматически будут связаны друг с другом? просто сейчас я несколько раз забывала 
// поменять значения во второй функции и это очень раздражает((

function getAverageScore(data) {
    function getAverageMark(...marks) {
        
    }
}

let data = {
    algebra: [2, 5, 4, 3, 5, 4],
    geometry: [4, 5, 5, 5, 4],
    russian: [3, 3, 3, 5, 4, 4, 5],
    physics: [5, 4, 3],
    music: [4],
    english: [4, 4, 4, 3, 5, 5],
    poetry: [5, 5, 4, 3],
    chemistry: [2, 4, 3],
    french: [2]
}