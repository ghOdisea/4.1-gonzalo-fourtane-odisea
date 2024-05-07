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

  // async deleteTask (id: number): Promise<boolean> {
  //   const deletedTask = await this.taskRepository.deleteTask(id)
  //   return deletedTask
  // }

  // async updateTask (id: number): Promise<Task | undefined> {
  //   const updatedTask = await this.taskRepository.updateTask(id)
  //   console.log('task updated')
  //   return updatedTask
  // }
}
