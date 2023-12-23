let currentDate = new Date();

global.date = currentDate;

module.exports.getMessage = function () {
    let hour = currentDate.getHours();
    if (hour > 16) return 'Добрый вечер, уважаемый' + global.name;
    else if (hour > 10) return 'Добрый день, уважаемый' + name;
    else return 'Доброе утро, уважаемый' + name;
};