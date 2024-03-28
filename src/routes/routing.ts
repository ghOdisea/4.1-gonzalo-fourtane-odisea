const http = require('node:http')

const portNumber : number = 3000

const processRequest = (req: any, res: any) => {
    const { method , url} = req

    switch(method){
    case 'GET':
        switch(url){
            case '/':
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html; charset=utf8')
                return res.end('<h1>Hola Mundo, soy GET</h1>')
            default :
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/plain')
                return res.end('404')
        }
    case 'POST':
        switch(url){
            case '/':
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html; charset=utf8')
                return res.end('<h1>Soy POST</h1>')
        }
    case 'PUT':
        switch(url){
            case '/':
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html; charset=utf8')
                return res.end('<h1>Soy PUT</h1>')
        }
    case 'DELETE':
        switch(url){
            case '/':
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html; charset=utf8')
                return res.end('<h1>Soy DELETE</h1>')
        }
    default:
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        return res.end('404')
    }
}

const server = http.createServer(processRequest)

server.listen(portNumber, () => {
    console.log(`Server listening on port http://localhost:${portNumber}`)
})