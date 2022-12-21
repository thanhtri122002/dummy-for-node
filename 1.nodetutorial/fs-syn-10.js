const {readFileSync, writeFileSync} = require('fs');
/* is euqal bewlow
const fs =  require('fs')
fs.readFileSync*/

const first = readFileSync('./content/first.txt','utf-8');

const second = readFileSync('./content/second.txt','utf-8');
//out put = Hello this is from the text file Hello this is from the text file 2
console.log(first, second)
//flag : a means append
writeFileSync('./content/result-sync.txt','Here is the result'+ first + ' / ' + second, {flag : 'a'})
