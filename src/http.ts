const http = require('node:http')

const portNumber : number = 3000
var counter : number = 0
const processRequest = (req: any, res: any) => {
    if( req.url == '/'){
    // switch(req.url){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        res.end('<h1>Hola Mundo</h1>')
    }else if (req.url == '/contacto'){
        res.statusCode = 200
        res.end('<h1>Contacto</h1>')
    }else {
        res.statusCode = 404
        res.end('<h1>404</h1>')
    }
    counter++
    console.log(`request received number: ${counter}`)
}

const server = http.createServer(processRequest)

server.listen(portNumber, () => {
    console.log(`Server listening on port http://localhost:${portNumber}`)
})