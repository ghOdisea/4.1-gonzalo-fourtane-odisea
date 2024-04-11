import type { Request, Response } from 'express'
import { taskService } from '../dependencies.js'

export class TaskController {
  async getTasks (_: Request, res: Response): Promise<void> {
    const tasks = await taskService.getAllTasks()
    if (tasks === undefined) {
      res.status(404).send('Tasks not found')
    }

    res.status(200).json(tasks)
  }

  async getTaskById (req: Request, res: Response): Promise<void> {
    const taskId = Number(req.params.id)
    const task = taskService.getTaskById(taskId)
    console.log('control Task-id', task) // control Task-id  Promise { <pending> }
    if (task === undefined) {
      res.status(404).send('Task not found')
    } else {
      res.status(200).json(task)
    }
  }

  async createTask (req: Request, res: Response): Promise<void> {
    const taskId = Number(req.body.id)
    const taskDesc = String(req.body.description)
    const newTask = taskService.createTask(taskId, taskDesc)
    console.log('control new Task', newTask) // control new Task Promise { <pending> }
    if (newTask === undefined) {
      res.status(404).send('Error - Task not created')
    } else {
      res.status(200).json(newTask)
    }
  }

  async deleteTask (req: Request, res: Response): Promise<void> {
    const deleteId = Number(req.params.id)
    const deletedTask = taskService.deleteTask(deleteId)
    console.log('control new Task', deletedTask) // control delete Task Promise { <pending> }
    res.status(200).end('Tarea eliminada')
  }

  async updateTask (req: Request, res: Response): Promise<void> {
    const updateId = Number(req.params.id)
    const updateTask = taskService.updateTask(updateId)
    console.log('control update', updateTask)
    res.status(200).json(updateTask)
  }
}
