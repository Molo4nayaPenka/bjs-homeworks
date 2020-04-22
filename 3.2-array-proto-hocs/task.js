'use strict'
function sum(...args) {
    //Замедление на половину секунды.
    function sleep(milliseconds) {
        let e = new Date().getTime() + milliseconds;
        while (new Date().getTime() <= e) {}
    }

    sleep(500); // Можно использовать другое значение замедления.
    
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {

    if (arr1.length !== arr2.length || arr1 === undefined || arr2 === undefined) {
        return false;
    } 

    if (arr1.length === 0 && arr2.length === 0) {
        return true;
    }

    function isEqual(itemInArr1, index) {
        return itemInArr1 === arr2[index];
    }

    return arr1.every(isEqual);
}

/*
compareArrays([8, 9], [6]); //false
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные длины массивов
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные длины массивов
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные значения на одних и тех же индексах
compareArrays([8, 1, 2], [8, 1, 2]); // true
*/


function memorize(fn, limit) {
    const memory = [];

    return function(...args) {
        const itemIsMemorized = memory.find((object) => compareArrays(args, object.args));
        // console.log(itemIsMemorized);
        if (itemIsMemorized) {
            console.log('Результат берётся из памяти');
            return itemIsMemorized.result;
        } else {
            console.log('Результат берётся не из памяти');
            const memoryItem = {
                args: arguments,
                result: fn(...args),
            }

            memory.push(memoryItem);
            // console.log(memory);
            if (memory.length > limit) {
                memory.shift();
            }
            return memoryItem.result;
        }
    }
}
const mSum = memorize(sum, 5);
// mSum(1, 2, 3);
// mSum(1, 2, 3);
// mSum(2, 4, 3, 6, 5);
// mSum(2, 4, 6, 5);
// mSum(2, 4, 3, 6, 5);
// mSum(6, 5);
// mSum(26, 4);
// mSum(4, 7, 9);
// mSum(2, 4, 3, 6, 5);
// mSum(1, 2, 3);

function testCase(testFunction, timerName) {
    const argsArray = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
    console.time(timerName);
    for(let i=0; i < 10; i++) {
        const result = argsArray.forEach(argsArray => (testFunction(...argsArray)));
    }
    console.timeEnd(timerName);
    
}

testCase(sum, 'sumTimer');
testCase(mSum, 'mSumTimer');

/*
Результат с активированной задержкой в sum:
sumTimer: 25051.8837890625ms
mSumTimer: 1504.700927734375ms
Улучшенный вариант функции sum работает быстрее в 16,65 раз. Оптимизация прошла успешно.

Функция sleep в sum отключена:
sumTimer: 0.155029296875ms
mSumTimer: 0.61376953125ms
Выполнять кучу функций для отслеживания результатов подсчётов, запись их в память и удаление в случае её переполнения
тяжелее для интерпретатора, чем просто каждый раз посчитать с помощью одной функции/метода какой-то пример. Добавление выводов в консоль 
заметно утяжеляет код. Время выполения mSum с console.log() было около 16ms, что в 26 раз дольше, чем без вывода. 
*/

