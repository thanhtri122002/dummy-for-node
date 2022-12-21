const http = require('http')
const server = http.createServer((req,res)=>{
    //the content type is the type that server response to the client
    //that is if the content is html we will get the html 
    //if the content type is text/plain it will be <h1>home page</h1>
    //status code tell how the request, for example status code 404 means the request is not found
    res.writeHead(200,{'content-type':'text/html'})
    console.log('hello')
   
    res.write('<h1>home page</h1>')
    res.end() 
    //res.end('<h1>home page</h1>') equal to  res.write
})
server.listen(5000)