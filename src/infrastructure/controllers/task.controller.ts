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
    if (task === undefined) {
      res.status(404).send('Task not found')
    } else {
      res.status(200).json(task)
    }
  }

  async createTask (req: Request, res: Response): Promise<void> {
    const taskDesc = String(req.body.description)
    const newTask = taskService.createTask(taskDesc)
    if (newTask === undefined) {
      res.status(404).send('Error - Task not created')
    } else {
      res.status(200).json(newTask)
    }
  }

  async deleteTask (req: Request, res: Response): Promise<void> {
    const deleteId = Number(req.params.id)
    const deletedTask = taskService.deleteTask(deleteId)
    if (deletedTask) {
      res.status(204).end('Tarea eliminada')
    } else {
      res.status(404).end('Tarea no encontrada')
    }
  }

  async updateTask (req: Request, res: Response): Promise<void> {
    const updateId = Number(req.body.id)
    const updateDesc = String(req.body.description)
    const updateCheck = Boolean(req.body.completed)
    const updateTask = taskService.updateTask(updateId, updateDesc, updateCheck)
    if (updateTask !== undefined) {
      console.log(updateCheck)
      res.status(200).json(updateTask)
    } else {
      res.status(404).end('Tarea no encontrada')
    }
  }
}
