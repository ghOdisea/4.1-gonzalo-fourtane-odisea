import { TaskController } from '../controllers/task.controller'
import { BaseRouter } from './router'

export class TaskRouter extends BaseRouter<TaskController> {
  constructor () {
    super(TaskController)
  }

  routes (): void {
    this.router.get('/tasks', (_, res) => {
      void this.controller.getTasks(_, res)
    })
    this.router.get('/task/:id', (req, res) => {
      void this.controller.getTaskById(req, res)
    })
    this.router.post('/task/add', (req, res) => {
      void this.controller.createTask(req, res)
    })
    this.router.put('/task/:id', (req, res) => {
      void this.controller.updateTask(req, res)
    })
    this.router.delete('/task/:id', (req, res) => {
      void this.controller.deleteTask(req, res)
    })
  }
}
