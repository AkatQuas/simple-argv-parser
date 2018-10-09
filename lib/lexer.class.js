const { CHAR: { EOF, EQ, HYPHEN, SPACE }, TOKEN: { VALUE, VAR, UNDEFINED }, ALNUMDOT } = require('./constans');

const Token = require('./token.class');

module.exports = class Lexer {
    constructor(text) {
        this._text = text;
        this.index = 0;
        this.length = text.length;
        this.char = this._text[this.index];
    }

    advance() {
        this.index += 1;
        if (this.index >= this.length) {
            this.char = EOF;
        } else {
            this.char = this._text[this.index];
        }
    }

    skipChar(type) {
        while (this.char !== EOF && this.char === type) {
            this.advance();
        }
    }

    eatChar(type) {
        if (this.chra !== EOF && this.char === type) {
            this.advance();
        }
    }

    isVar() {
        let res = '';
        while (this.char !== EOF && ALNUMDOT.test(this.char)) {
            res += this.char;
            this.advance();
        }
        return new Token(VAR, res);
    }

    isValue() {
        let res = '';
        while (this.char !== EOF && this.char !== SPACE) {
            res += this.char;
            this.advance();
        }
        res = res ? res : UNDEFINED;
        return new Token(VALUE, res);
    }

    getNextToken() {
        while (this.char && this.char !== EOF) {
            if (this.char === SPACE) {
                this.skipChar(SPACE);
                continue;
            }
            if (this.char === HYPHEN) {
                this.skipChar(HYPHEN);
                return this.isVar();
            }
            if (this.char === EQ) {
                this.skipChar(EQ);
                return this.isValue();
            }
            return this.isValue();
        }
    }

    error() {
        throw Error('Invalid character');
    }
}