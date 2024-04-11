import type Task from './task'

export interface TaskRepository {
  getAllTasks: () => Promise <Task[]>
  getTaskById: (taskID: number) => Promise<Task | undefined>
  createTask: (id: number, description: string) => Promise<Task | undefined>
  deleteTask: (id: number) => Promise<boolean>
  updateTask: (id: number) => Promise<Task | undefined>
}
