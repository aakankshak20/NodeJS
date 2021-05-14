var http=require('http');

var server=http.createServer(function(req,res){
    console.log('Request was made '+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Success!I'm listing from port 3000");

});

server.listen(3000,'127.0.0.1');
console.log("Success!I'm listing from port 3000");