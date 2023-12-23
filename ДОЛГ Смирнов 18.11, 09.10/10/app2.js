const EventEmitter = require('events');

let eventName = 'BYBA';

class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

let user = new User();

user.on(eventName, function (data) {
    console.log(data);
});

user.sayHi('Как дела?');