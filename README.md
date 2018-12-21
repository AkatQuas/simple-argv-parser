
# Simple Argv Parser

For parsing argv from the command line. Dependencies free!

# Installation

I don't want to publish it to the npm package, so you might as well to install the package like this:

```
npm i -S git+https://github.com/AkatQuas/simple-argv-parser

or 

yarn add git+https://github.com/AkatQuas/simple-argv-parser
```

# Supported Argv syntax

```bash
node [js_file] --var1 value1 --var2=value2 --var2=value22 --var3 -var4 value4 ------var5 value5
```

Just like the usage of shell commands, and the variable name can be started with any number of hyphens ( at least one, for sure, otherwise it's regarded as a value). 

**NOTE**: All the values are parsed as string. And the string `'false'` would be taken as the boolean `false`, string `'true'` for boolean `true`.

**NOTE**: A variable without a value would be a boolean value, `true`.

**NOTE**: A value without a variable name will throw an error.

**NOTE**: Multiple values for same variable name will become an array, now we just accept `string` and `boolean`.

>  Weakness
>
> It takes for granted that no other command after the `[js_file]` and before `arguments`, so command like this won't work:
>
>   ```bash
>   node [js_file] subcommand --var1 value1
>   ```
>
> No subcommand allowed!
>

# Test

```javascript
// in the javascript, named `test.js`
const simpleArgvParser = require('simple-argv-parser');

console.log(simpleArgvParser(process.argv.slice(2)));
```

In the shell:

```bash
# executing:
node test/index.test.js -y 2018 --open --harmony=false --useNative=true
# with results:
{ y: '2018', open: true, harmony: false, useNative: true }

#executing:
node test/index.test.js -y 2018 --open -url http://cn.bing.com -icon v1 -icon v2 -icon

# with results:
{ y: '2018',
  open: true,
  url: 'http://cn.bing.com',
  icon: [ 'v1', 'v2', true ] }

```

And run multiple [test](test/main.test.js):

```bash
npm run test
```

# Requirements

Using `class` syntax natively, you'd better update your node to `^8.10.0`.
