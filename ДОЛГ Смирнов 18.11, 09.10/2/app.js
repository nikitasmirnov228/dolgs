const http = require('http');
const os = require('os');
const greeting = require('./privetsvie.js');

let userName = os.userInfo().username;

console.log(`Дата: ${greeting.date}`);
console.log(greeting.getMessage(userName));

const User = require('./pol.js');

let eugene = new User('Dima', 32);
eugene.sayHi();

http.createServer(function (request, response) {
    response.end('Hello');
}).listen(3000, '127.0.0.1', function () {
    console.log(
        'Сервер начал прослушивание запросов на порту 3000'
    );
});