import { Router } from "express";
import { TaskRouter } from "../infrastructure/router/task.router";

const express = require('express')

class ServerBootStrap {
    public app = express()
    public port : number = 3000

    constructor(){
        this.app.use(express.json())//hace la funcion de body parser
        this.app.use(express.urlencoded({ extended: true }))
        this.app.disable('x-powered-by')
        this.app.use('/api', this.routers()) //Ejecución de las rutas en /api
    
        this.listen()   //Escucha del servidor
    }
    //Funcion que al ejecutarse, devuelve la ejecución de todos los routers creados en el array-
    routers(): Router[]{
        return [new TaskRouter().router]
    }

    public listen (){
        this.app.listen(this.port, () => {
            console.log(`Server listening on port => ${this.port}`)
        })
    }
}

new ServerBootStrap()

// const app = express()
// app.disable('x-powered-by')

// app.get('/', (req: Request, res: Response) => {
//     // res.send('<h1>Mi ToDo List</h1>')
//     res.json(ToDoList)
// })

// app.post('/', (req: Request, res: Response) => {
//     let body = ''
//     req.on('data', chunk => {
//         body += chunk.toString()
//     })
//     req.on('end', () => {
//         const data = JSON.parse(body)
//         res.status(201).json(data)
//     })
// })

// app.use((req: Request, res: Response) => {
//     res.status(404).send('<h1>404 Not Found</h1>') 
// })

// app.listen(PORT, () => {
//     console.log(`Server listening on port http://localhost:${PORT}`)
// })
