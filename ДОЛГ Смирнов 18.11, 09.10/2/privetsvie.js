let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 16) return 'Добрый вечер, увважаемый' + name;
    else if (hour > 10) return 'Добрый день, уважаемый ' + name;
    else return 'Доброе утро, уважаемый' + name;
};