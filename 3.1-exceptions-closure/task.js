'use strict'

//1

function parseCount(countValue) {
    const count = Number.parseInt(countValue, 10);
    if (isNaN(count)) {
        const error = new Error('Невалидное значение');
        throw error;
    }
    return count;
}

function validateCount(count) {
    try {
        const validCount = parseCount(count);
        return validCount;
    } catch (error) {
        return error;
    }
}

//2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
            const triangleError = new Error('Треугольник с такими сторонами не существует');
            throw triangleError;  
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        // интересно, почему toFixed() возвращает строку, это же неудобно...
        return Number(area);
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        // я думала, что надо перезаписать эти методы triangle (triangle.getPerimeter), но хром говорит, 
        //что triangle не определён. почему?
        error.getPerimeter = () => 'Ошибка! Неправильный треугольник';
        error.getArea = () => 'Ошибка! Неправильный треугольник';
        return error;
    }  
}