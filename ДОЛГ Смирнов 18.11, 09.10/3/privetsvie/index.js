const morning = require('./ytro');
const evening = require('./vecher');

module.exports = {
    getMorningMessage: function () {
        console.log(morning);
    },
    getEveningMessage: function () {
        console.log(evening);
    },
};