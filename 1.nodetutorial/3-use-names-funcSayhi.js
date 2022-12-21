/*gloabal
const john = 'John'
const peter = 'Peter'
const secret ="SUPER SECRET"

const sayHi = (name) => {
    console.log('hello' +  name )
}*/
const name = require('./tutorial4-names')
const sayHi =require('./5-utils')
console.log(name)

sayHi('susan')
sayHi(name.john)
sayHi(name.peter)
