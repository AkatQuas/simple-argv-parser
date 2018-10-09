
const verifyType = require('./lib/verify-type');

const Lexer = require('./lib/lexer.class');

const Interpreter = require('./lib/interpreter.class');

module.exports = args => {
    const text = verifyType(args);

    const lexer = new Lexer(text);

    const interpreter = new Interpreter(lexer);

    return interpreter.parse();
};
