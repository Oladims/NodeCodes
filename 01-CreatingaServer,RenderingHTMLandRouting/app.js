var fs = require('fs');
var url = require('url');

renderHtml = function (path, response) {
    fs.readFile(path, null, function (error, data) {
        if (error) {
            response.writeHead('404');
            response.write('File Not Found');
        }
        else {
            response.write(data);
            response.end();
        }
        response.end();
    })
}
module.exports = {
    onRequest: function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
            renderHtml('./index.html', response)
                break;

            case '/login':
            renderHtml('./login.html', response)
                break;

            default:
                response.writeHead('404');
                response.write('File Not Found');
                break;
        }
    }
};