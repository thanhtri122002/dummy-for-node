const path = require('path')
//the symbol use to sperate directories name
console.log(path.sep)

//create a file path
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//return the basename of a file path = > output: test txt
const base = path.basename(filePath)
console.log(base)
//output  = c:\Users\ASUS\Desktop\nodejstutorial\content\subfolder\test.txt
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute)
