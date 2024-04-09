import type { Request, Response } from 'express'
import { taskService } from '../dependencies.js'

export class TaskController {
  async getTasks (req: Request, res: Response): Promise<void> {
    const tasks = await taskService.getAllTasks()
    if (tasks === undefined) throw new Error('No se han encontrado las tareas')
    console.log('controller', tasks)

    res.status(200).json(tasks).end()
  }

  getTaskById (req: Request, res: Response): void {
    const taskId = req.params.id

    console.log(typeof taskId)
    const task = taskService.getTaskById(taskId)
    res.status(200).json(task)
  }
}
