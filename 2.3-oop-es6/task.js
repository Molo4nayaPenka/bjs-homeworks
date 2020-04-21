'use strict'

//1

class Weapon {
    constructor(values) {           
        this.name = values.name;
        this.attack = values.attack;
        this.durability = values.durability;
        this.range = values.range; 
        this.initialDurability = values.durability;
        this.initialAttack = values.attack;
    };

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        };
        return this.durability;
    };

    // почему-то тест на этом месте выдаёт, что 'expected 10 to equal 5'. но ведь я вроде правильно условие выполнила
    // UPD: я сделала, как вы написали -- не перезаписывала this.attack, а сразу возвращала нужное значение. но не очень поняла, почему
    // это срaботало :^). это как-то связано с this или с return?
    getDamage() {
        if (this.durability === 0) {
            return 0;
        } else if (this.durability < this.initialDurability * 0.3) {
            return this.attack / 2;
        } 

        return this.attack;
    };

    isBroken() {
        return this.durability <= 0;
    }
};

const sword = new Weapon({ // в {} передаём те параметры, которые принимает конструктор (объект values)
    name: 'Старый меч',
    attack: 25,
    durability: 500,
    range: 1
});

const arm = new Weapon({
    name: 'Рука',
    attack: 1, 
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

sword.takeDamage(350);
console.log(sword.durability); 
sword.getDamage();
console.log(sword.attack); 
console.log(sword.isBroken()); 
arm.takeDamage(500);
console.log(arm.durability);
console.log(arm.isBroken()); 

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: bow.durability, // наследуем свойство от простого лука, обращаемся к свойству через точечную нотацию
    range: 4,
});

const axe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: sword.range,
});

const stormStaff = new Weapon({
    name: 'Посох бури',
    attack: 10,
    durability: staff.durability,
    range: 3,
});

//2

class Sword extends Weapon {
    constructor(extended) {
        if (extended === undefined) {
            super({
                name: 'Меч',
                attack: 25,
                durability: 500,
                range: 1,
            });
        } else {
            super(extended);
        }    
    }
}

class Axe extends Sword {
    constructor() {
        super({
            name: 'Секира',
            attack: 27,
            durability: 800,
            // здесь можно обращаться через точку к свойству? 
            // вдруг мы не создадим объект, к свойству которого обращаемся? или вдруг у него будет другое имя?
            // просто продублировать значение по логике задания не подходит
            range: sword.range,
        });
    }
}

class Arm extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
        });
    }
}

class Bow extends Weapon {
    constructor(extended) {
        if (extended === undefined) {
            super({
                name: 'Лук',
                attack: 10,
                durability: 200,
                range: 3,
            });
        } else {
            super(extended);
        }    
    }
}

class LongBow extends Bow {
    constructor() {
        super({
            name: 'Длинный лук',
            attack: 15,
            durability: bow.durability,
            range: 4,
        });
    }
}

class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        });
    }
}

class Staff extends Weapon {
    constructor(extended) {
        if (extended === undefined) {
            super({
                name: 'Посох',
                attack: 8,
                durability: 300,
                range: 2,
            });
        } else {
            super(extended);
        }
    }
}

class StormStaff extends Staff {
    constructor() {
        super({
            name: 'Посох Бури',
            attack: 10,
            durability: staff.durability, 
            range: 3,
        });
    }
}

const sword2 = new Sword();
console.log('======= SWORD2 =======');
console.log(sword2.name);
console.log(sword2.durability);
console.log(sword2.attack);
console.log(sword2.range);
const axe2 = new Axe();
const arm2 = new Arm();
const bow2 = new Bow();
const longBow2 = new LongBow();
const knife2 = new Knife();
const staff2 = new Staff();
const stormStaff2 = new StormStaff();
console.log(stormStaff2);

// 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (typeof grade !== 'number' || grade > 5 || grade < 1) {
            console.log(`Вы пытались поставить оценку '${grade}' по предмету '${subject}'. 
            Допускаются только числа от 1 до 5`);
        }
        if (this.grades[subject]) {
            this.grades[subject].push(grade);
        } else {
            this.grades[subject] = [];
            this.grades[subject].push(grade);
        }
        return this.grades[subject].length;
    }

    getAverageBySubject(subject) {
        this.marks = this.grades[subject];
        if (this.marks.length === 0) {
            return 0;
        }
        let sum = 0;
        for (let i=0; i < this.marks.length; i++) {
            sum += this.marks[i];
        } 
        return sum / this.marks.length;
    }

    getTotalAverage() {
        const averageScore = {};
        for (let prop in this.grades) {
            averageScore[prop] = this.getAverageBySubject([prop]);
        }

        const averageMarks = [];
        for(let mark in averageScore) {
            averageMarks.push(averageScore[mark]);
        }

        let sum = 0;
        for (let i=0; i < averageMarks.length; i++) {
            sum += averageMarks[i];
        }

        return sum / averageMarks.length;
    }
}

const log = new StudentLog('Vasya Pupkin');
console.log(log.getName());
log.addGrade(3, 'algebra');
log.addGrade(4, 'geometry');
log.addGrade(4, 'algebra');
log.addGrade(2, 'russian');
log.addGrade(5, 'algebra');
log.getAverageBySubject('algebra');
console.log(log.grades);
console.log(log.getAverageBySubject('algebra'));
console.log(log.getTotalAverage());