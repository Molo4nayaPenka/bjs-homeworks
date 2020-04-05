'use strict'
function getSolutions(a, b, c) {
    const D  = (b ** 2) - 4 * a * c;
    const roots = [];
    if (D < 0) {
        return {
            D,
            roots
        }
    } else if (D === 0) {
        const x1 = -b / 2 * a;
        return {
            D,
            roots: roots.push(x1)
        }
    } else {
        const x1 = (-b + Math.sqrt(D)) / 2 * a;
        const x2 = (-b - Math.sqrt(D)) / 2 * a;
        return {
            D,
            roots: roots.push(x1, x2)
        }
    } 
}
getSolutions(2, 4, 2);


