var http = require('http')
var url = require('url')

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888)
}

console.log('服务器已经启动')

exports.start = start