const data = require('./6-alternative-flavor')
console.log(data)
//output { items: [ 'item 1', 'item 2' ], singlePerson: { name: 'bob' } }

console.log(data.items[0])

//this will invoke the code in the mind-grenade(wrap the function too => exectuting the code)
require('./7-mind-grenade')