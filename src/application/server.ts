import { type Router } from 'express'
import { TaskRouter } from '../infrastructure/router/task.router'

import express = require('express')

class ServerBootStrap {
  public app = express()
  public port: number = 3000

  build (): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.disable('x-powered-by')
    this.app.use('/api', this.routers())

    this.listen()
  }

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
