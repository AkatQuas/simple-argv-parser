const [HYPHEN, EQ, SPACE, EOF] = ['-', '=', ' ', 'EOF'];
const [VAR, VALUE] = ['VAR', 'VALUE'];
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
        VALUE
    },
    ALNUMDOT,
    BooleanMap: {
        'true': true,
        'false': false 
    }
}