const http = require('http');
const welcome = require('./privetsvie');

welcome.getMorningMessage();
welcome.getEveningMessage();

http.createServer(function (request, response) {
    response.end('Hello');
}).listen(3000, '127.0.0.1', function () {
    console.log(
        'Сервер начал прослушивание запросов на порту 3000'
    );
});