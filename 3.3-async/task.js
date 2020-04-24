'use strict'

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        try {
            if (id === undefined) {
                throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
                // тест выдаёт ошибку "Будильник не должен создавать таймер с одинаковым id", но ведь он же и не создаёт
            } else if (this.alarmCollection.some((alarm) => alarm.id === id)) {
                throw new Error('Будильник с таким id уже существует');
            } 
        // я не поняла, как сделать так, чтобы ошибка в консоли была подсвеченной, но при этом не останавливала весь остальной код.
        // просто возврат ошибки в catch ничего не показывает в консоли    
        } catch (error) {
            return console.log(error);
        }
        
        this.alarmCollection.push({
            id, 
            time,
            callback,
        });
    }

    removeClock(id) {
        this.alarmToBeDeleted = this.alarmCollection.filter((alarm) => id === alarm.id);
        const index = this.alarmCollection.indexOf(this.alarmToBeDeleted);
        this.alarmCollection.splice(index, 1);
        return !!this.alarmToBeDeleted.length;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() { 
        let checkClock = (alarm) => {
            const now = this.getCurrentFormattedTime();
            if (alarm.time === now) {
               alarm.callback();
            }
        }
        
        if (!this.timerId) {
            setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    this.timerId = checkClock(alarm);
                });
            }, 1000);    
        }
    }    

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}.`);
        return this.alarmCollection.forEach((alarm) => console.log(`Будильник №${alarm.id} заведён на ${alarm.time}`))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = []; // мне кажется, это быстрее, чем через splice удалять
    }
}

// создаём экземпляр класса AlarmClock

const alarm = new AlarmClock();
alarm.addClock('17:36', () => console.log('It\'s time to go to bed'), 1);

// этот будильник почему-то выполняется 2 раза перед удалением. не понимаю, в чём ошибка
alarm.addClock('17:37', () => {
    console.log('Go get some sleep already!');
    alarm.removeClock(2);
}, 2);    

alarm.addClock('17:37', () => console.log('Zzzzzz...'));
alarm.addClock('17:38', () => {
    console.log('You\'re gonna regret it in the morning');
    alarm.stop();
    alarm.clearAlarms();
    alarm.printAlarms();
}, 3); 
alarm.start();   
alarm.printAlarms();
alarm.addClock('17:39', () => console.log('Do not do this mistake again, dude!'), 1);
