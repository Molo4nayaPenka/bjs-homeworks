'use strict'
// Помогите создать всемирный каталог всех животных. Программисты, которые работали над ним до этого, уже написали 
// большую часть и создали все объекты, которые описывают животных. Только вот для некоторых из них забыли 
// добавить звуки, которые они издают. Напишите функцию, которая принимает объект с животным и возвращает звук 
// (текстом).

// Процесс реализации
// Создайте функцию принимающую один аргумент animal, объект описывающий животного;
// Если переменная animal равна undefined, верните в качестве результата работы функции null;
// Создайте переменную sound, присвоив ей значение поля sound объекта animal;
// Если переменная animal не равна undefined, верните в качестве результата работы, переменную sound.

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    }
    const sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i=0; i < marks.length; i++) {
        marks[i] = +marks[i];
        sum += marks[i];
    }
    const average = sum / marks.length;
    const roundedAverage = Math.round(sum / marks.length);
    return roundedAverage;
}

function checkBirthday(birthday) {
    const now = +(new Date());
    const birthDay = +(new Date(1998, 9, 22, 12, 0));
    const diff = now - birthDay;
    const age = Math.trunc(diff / (31536000000 - ((31622400000 - 31536000000) * 6)));
    console.log(age);
    let verdict;
    if (age > 18) {
        verdict = true;
    } else {
        verdict = false;
    }

    return verdict;
}