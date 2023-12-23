const fs = require('fs');

let writeableStream = fs.createWriteStream('hello11.txt');
writeableStream.write('Привет!');
writeableStream.write(' Здравствуй \n');
writeableStream.end('Конец');
let readableStream = fs.createReadStream(
    'hello11.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});