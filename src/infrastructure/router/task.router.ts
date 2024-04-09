import Task from '../../domain/task'
import { TaskController } from '../controllers/task.controller'
import { BaseRouter } from './router'

export class TaskRouter extends BaseRouter<TaskController> {
  constructor () {
    super(TaskController)
  }

  // función de la base usandola desde el task router.
  routes (): void { // Devuelve todas las tareas
    this.router.get('/tasks', (req, res) => { this.controller.getTasks(req, res) })
    // Devuelve tarea segun id
    this.router.get('/task/:id', (req, res) => { this.controller.getTaskById(req, res) })
  }
}
