import type Task from '../domain/task'
import { type TaskRepository } from '../domain/task.repository'

export class TaskService {
  constructor (private readonly taskRepository: TaskRepository) {
    this.taskRepository = taskRepository
  }

  async getAllTasks (): Promise<Task[]> {
    const tasks = this.taskRepository.getAllTasks()
    return tasks
  }

  getTaskById (taskID: number): Task | undefined {
    const task = this.taskRepository.getTaskById(taskID)
    return task
  }

  createTask (description: string): Task | undefined {
    const task = this.taskRepository.createTask(description)

    if (task === undefined) return undefined

    return task
  }

  deleteTask (id: number): boolean {
    const deleteConfirm = this.taskRepository.deleteTask(id)
    return deleteConfirm
  }

  updateTask (id: number, description: string, completed: boolean): Task | undefined {
    const updatedTask = this.taskRepository.updateTask(id, description, completed)
    return updatedTask
  }
}
