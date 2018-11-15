const exec = require('child_process').execSync;

const cmds = [
    'node test/index.test.js -y 2018 --open',
    'node test/index.test.js -y 2018 --open -url http://cn.bing.com -icon v1 -icon v2 -icon'
];
const opt = {
    stdio: 'inherit'
};

cmds.forEach(cmd => {
    console.log(`executing:\n"${cmd}"\nwith results:`);
    exec(cmd, opt);
    console.log('\n');
});
