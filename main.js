var http = require('http');
var fs = require('fs');
// url이라는 node를 url 변수를 사용할 것.
var url = require('url');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = new URL('http://localhost:3000' + _url).searchParams;
  var title = queryData.get('id');
  var pathname = url.parse(_url, true).pathname;
  
  if(pathname === '/') {
    
    fs.readFile(`data/${title}`, 'utf8', function(err,data){
        var description = data;
        var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>    
      `;
      response.writeHead(200);
      response.end(template);
    });
    //console.log(__dirname + _url);
  } else {
    // 파일을 찾을 수 없다
    response.writeHead(404);
    response.end("Not found");
  }

});
app.listen(3000); 