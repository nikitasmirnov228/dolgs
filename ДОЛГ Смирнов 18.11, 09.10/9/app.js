const fs = require('fs');

fs.writeFileSync('hello9.txt', 'ПРИВЕТ\n');
fs.appendFile('hello9.txt', 'Привет !', function (error) {
    if (error) throw error; 

    console.log(
        'Запись окончена:'
    );
    let data = fs.readFileSync('hello9.txt', 'utf8');
    console.log(data); 
});
