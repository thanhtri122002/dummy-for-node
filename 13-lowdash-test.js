const _ = require('lodash')

const item  = [1,[2,[3,[4]]]]
//turn the item into normal list
const  newItems = _.flattenDeep(item)

console.log(newItems)
