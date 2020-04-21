'use strict'
function sum(...args) {
    // Замедление на половину секунды.
    // function sleep(milliseconds) {
    //     let e = new Date().getTime() + milliseconds;
    //     while (new Date().getTime() <= e) {}
    // }

    // sleep(500); // Можно использовать другое значение замедления.
    
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

compareArrays([8, 9], [6]); //false
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные длины массивов
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные длины массивов
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные значения на одних и тех же индексах
compareArrays([8, 1, 2], [8, 1, 2]); // true



function memorize(fn, limit) {
    const memory = [];
    
    // class MemoryItem {
    //     constructor(a, b) {
    //         this.args = a;
    //         this.result = b;
    //     }
    // }

    return function(...args) {
        const itemIsMemorized = memory.find((object) => compareArrays(args, object.args));
        console.log(itemIsMemorized);
        if (itemIsMemorized) {
            console.log('Результат берётся из памяти');
            return itemIsMemorized.result;
        } else {
            console.log('Результат берётся не из памяти');
            fn(...args);

            // const memoryItem = new MemoryItem(arguments, fn(...args));
            const memoryItem = {
                args: arguments,
                result: fn(...args),
            }

            memory.push(memoryItem);
            console.log(memory);
            if (memory.length > limit) {
                memory.reverse().pop();
            }
            return fn(...args);
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
    const argsArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
    console.time(timerName);
    for(let i=0; i < 10; i++) {
        // у меня что-то не получилось создать эту функцию. подскажите, пожалуйста, что я делаю не так
        const result = argsArray.forEach((...argsArray) => (testFunction(...argsArray)));
        console.log(result);
    }
    console.timeEnd(timerName);
    
}

testCase(sum, 'sumTimer');
testCase(mSum, 'mSumTimer');

/*
Результат с активированной задержкой в sum:
sumTimer: 25067.2109375ms
mSumTimer: 7569.17919921875ms
Улучшенный вариант функции sum работает быстрее в 3,31 раза. Оптимизация прошла успешно.

Функция sleep в sum отключена:
sumTimer: 20.128173828125ms
mSumTimer: 62.9287109375ms
Выполнять кучу функций для отслеживания результатов подсчётов, запись их в память и удаление в случае её переполнения
тяжелее для интерпретатора, чем просто каждый раз посчитать с помощью одной функции/метода какой-то пример.
Думаю, такая логика сохранится, даже когда я поправлю функцию проверки.
*/

