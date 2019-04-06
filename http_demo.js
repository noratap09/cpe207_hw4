const http = require('http');

//create HTTP server


http.createServer( (Request,Response) => {
    //write response
    Response.write('<h1>Hello World</h1>');
    Response.end();
}).listen(5000,() => {
    console.log('Server is running ...');
});