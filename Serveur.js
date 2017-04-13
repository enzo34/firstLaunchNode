var http = require('http');

var ip = '127.0.0.1';
var port = 21210;

var server = http.createServer(
    function(request, reseponse){
        reseponse.statusCode = 200;
        reseponse.setHeader('Content-Type', 'text/plain');
        reseponse.end('wesh ma couillasse')
    }
);

server.listen(port,ip,function() {
    console.log('la chevalière marche avant marche arrière');

}

)


// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
