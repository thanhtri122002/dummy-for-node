const {readFile, writeFile} = require('fs')

//if there is no encoding (utf-8,..) there will be the buffer not the content of the file
//fisrt read the first.txt and then read the second.txt then write the result-async.txt
//callback functions: function used as arguments of other functions
//below code causes the callback hell ( too much callback)

readFile('./content/first.txt','utf-8',
(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    //if no error in first.txt
    const first = result
    //this readfile is in the readfile of first
    readFile('./content/second.txt','utf-8',(err,result) => {
        if(err){
        console.log(err)
        return
    }
    //if no error in second.txt
    const second = result
    //write the result-async file
    //this write file is in the writefile of second
    writeFile('./content/result-async.txt','Here is the result'+ first + ' / ' + second,
    (err,result)=>{
        if(err){
            return
        }
        console.log(result)
    })
})
})


