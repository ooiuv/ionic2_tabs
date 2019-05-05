const env = (process.argv.pop());
console.log('正在运行的环境：' + env);

const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, `../src/providers/Constants-${env}.ts`);
const target = path.resolve(__dirname, `../src/providers/Constants.ts`);

// 执行复制操作（读写）
const content = fs.readFileSync(source, 'utf-8');
fs.writeFileSync(target, content, 'utf8');

