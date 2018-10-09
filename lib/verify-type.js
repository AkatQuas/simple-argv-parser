const { CHAR } = require('./constans');

module.exports = function verifyType(argvs) {
    if (Array.isArray(argvs)) {
        return argvs.join(CHAR.SPACE);
    }
    if (typeof argvs === 'string') {
        return argvs;
    }
    throw TypeError('Argv type error, either String or Array');
}