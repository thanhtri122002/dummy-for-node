const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response',(name, id)=>{
    console.log(`data received ${name} with ${id}`)
})
customEmitter.on('response',()=>{
    console.log('some other logic here')
})
//the string must match
//order matter ! emit before on will print nothing
//'john' and 34 is the parameters which will be pass in the callback of on()
customEmitter.emit('response','john',34)
