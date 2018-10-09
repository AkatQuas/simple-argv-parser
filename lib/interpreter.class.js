const { TOKEN: { VALUE, VAR } } = require('./constans');

module.exports = class Interpreter {
    constructor(lexer) {
        this.lexer = lexer;
        this.current_token = this.lexer.getNextToken();
        this.obj = {};
    }

    eatToken(type) {
        if (this.current_token.type === type) {
            this.current_token = this.lexer.getNextToken();
        } else {
            this.error();
        }
    }

    pair() {
        const key = this.current_token.value;
        this.eatToken(VAR);
        let value;
        if (this.current_token && this.current_token.type === VALUE) {
            value = this.current_token.value;
            this.eatToken(VALUE);
        } else {
            value = true;
        }
        this.obj[key] = value;
    }

    parse() {
        /*
        VAR: VALUE
        VAR: void 0
        VALUE without VAR -> error
        */
        while (this.current_token) {
            this.pair();
        }
        return this.obj;
    }

    error() {
        throw Error('Invalid syntax, perhaps a value without variable name');
    }
}
