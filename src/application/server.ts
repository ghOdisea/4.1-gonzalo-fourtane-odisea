import { type Router } from 'express'
import { TaskRouter } from '../infrastructure/router/task.router'

import express = require('express')

class ServerBootStrap {
  public app = express()
  public port: number = 3000

  build (): void {
    this.app.use(express.json()) // hace la funcion de body parser
    this.app.use(express.urlencoded({ extended: true }))
    this.app.disable('x-powered-by')
    this.app.use('/api', this.routers()) // Ejecución de las rutas en /api

    this.listen() // Escucha del servidor
  }

  // Funcion que al ejecutarse, devuelve la ejecución de todos los routers creados en el array-
  routers (): Router[] {
    return [new TaskRouter().router]
  }

  public listen (): void {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port => ${this.port}`)
    })
  }
}

const server = new ServerBootStrap()
server.build()
