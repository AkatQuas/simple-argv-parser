
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
node [js_file] --var1 value1 --var2=value2 -var3 value3 ------var4 value4
```

Just like the usage of shell commands, and the variable name can be started with any number of hyphens ( at least one, for sure, otherwise it's regarded as a value). 

**NOTE**: All the values are parsed as a ring.

>  Weakness
>
> It takes for granted that no other command after the `[js_file]` and before `arguments`, so command like this won't work:
>
>   ```bash
>   node [js_file] subcommand --var1 value1
>   ```
>
> No subcommand allowed!

# Usage

```javascript
// the script, named `test.js`
const simpleArgvParser = require('simple-argv-parser');

console.log(simpleArgvParser(process.argv.slice(2)));
```

In the shell:

```bash
node test.js -y 2018 -url http://cn.bing.com

{
    y: '2018',
    url: 'http://cn.bing.com'
}
```

# Requirements

Using `class` syntax natively, you'd better update your node to `^8.10.0`.
