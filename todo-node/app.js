const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const webServer = http.createServer(
    (req, res) => {
        console.log(req.headers);
        console.log("=======");
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.setHeader('thbs-type', 'angular');
        res.end('Hello chinnu');
    }
)
webServer.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});