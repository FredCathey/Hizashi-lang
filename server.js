const port=5500
var http = require("http");
 httpStatus = require("http-status-codes");
const server=http.createServer((req,res) =>{
 console.log(req.url,req.method);
 Response.writeHead(httpStatus.OK,{
    "content-type":"text/html"
 })
  let responseMessage="<h1>welcome to hizashi</h1>";
   response.write(<h1>responseMessage</h1>);
   response.end();
   console.log(`sent a response:$
   {responseMessage}`);
});

server.listen(5500, "localhost",() => {
console.log("listening for requests on port 5500");
});
