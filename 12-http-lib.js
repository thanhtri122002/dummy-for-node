const http = require('http')
//req is the request form the client
//res is the response which send back to client
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    else if(req.url === '/about'){
        res.end('Here is  our short history')
    }
    else{
        res.end(`<h1>oops !</h1>
        <p>We cant seem to find the page you are looking for</p>
        <a href = "/">back home</a>`)
    }
    
})

//what port we are listening to
server.listen(5000)
//run and search the localhost:5000
//url property tell us what address the client is requesting