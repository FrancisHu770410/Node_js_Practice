const http = require('http');
function processRecord(request, response) {
    const body = 'Node js at ucom!!';
    const bodyLength = body.length;
    response.writeHead(200, body, {
        'Content-Type': 'text/plain',
        'Contet-Length': bodyLength
    });
    response.end(body);
}
const server = http.createServer(processRecord);
const serverPort = 8765;
server.listen(serverPort);
console.log('server listen on ', serverPort);