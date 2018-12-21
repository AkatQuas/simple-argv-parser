const { TOKEN: { VALUE, VAR }, BooleanMap } = require('./constans');

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
            const _v = this.current_token.value;
            value = (_v in BooleanMap) ? BooleanMap[_v] : _v;
            this.eatToken(VALUE);
        } else {
            value = true;
        }

        const old = this.obj[key];
        if (!old) {
            this.obj[key] = value;
        } else if (Array.isArray(old)) {
            old.push(value);
        } else {
            this.obj[key] = [old, value];
        }
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
