const [HYPHEN, EQ, SPACE, EOF] = ['-', '=', ' ', 'EOF'];
const [VAR, VALUE, UNDEFINED] = ['VAR', 'VALUE', void 0];
const ALNUMDOT = /[A-Za-z0-9.]/;

module.exports = {
    CHAR: {
        HYPHEN,
        EQ,
        SPACE,
        EOF
    },
    TOKEN: {
        VAR,
        VALUE,
        UNDEFINED
    },
    ALNUMDOT
}