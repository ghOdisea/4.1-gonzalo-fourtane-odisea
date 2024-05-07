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

  createTask (id: number, description: string): Task | undefined {
    const task = this.taskRepository.createTask(id, description)

    if (task === undefined) return undefined

    return task
  }

  deleteTask (id: number): boolean {
    const deletedTask = this.taskRepository.deleteTask(id)
    return deletedTask
  }

  checkTask (id: number): Task | undefined {
    const checkedTask = this.taskRepository.checkTask(id)
    console.log('task checked')
    return checkedTask
  }

  updateTask (id: number, description: string): Task | undefined {
    const updatedTask = this.taskRepository.updateTask(id, description)
    return updatedTask
  }
}
