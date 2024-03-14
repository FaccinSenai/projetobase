const http = require("http")

const requestListner = function (req, res) {
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200)
        res.end("<h1>Hello World!</h1>")
    }else if(req.method === "GET" && req.url === "/about"){
        res.writeHead(200)
        res.end("<h1>Guilherme Faccin \n 18 anos \n Senai</h1>")
    }else if(req.method === "GET" && req.url === "/portfolio"){
        res.writeHead(200)
        res.end("<h1>Keylogger \n Tokenlogger \n passwordStealer \n Password Gen</h1>")
    }else if(req.method === "GET" && req.url === "/curriculum"){
        res.writeHead(200)
        res.end("<h1>SENAI STUDENT</h1>")
    }else if(req.method === "GET" && req.url === "/contact"){
        res.writeHead(200)
        res.end("<h1>Faccin on discord</h1>")
    }
    else{
        res.writeHead(404)
        res.end("<h1>N EXISTE BURO</h1>")
    }
}
const server = http.createServer(requestListner)
server.listen(3000)