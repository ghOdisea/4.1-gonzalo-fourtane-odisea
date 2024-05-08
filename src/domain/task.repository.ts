import type Task from './task'

export interface TaskRepository {
  getAllTasks: () => Task[]
  getTaskById: (taskID: number) => Task | undefined /* sin promise */
  createTask: (description: string) => Task | undefined
  deleteTask: (id: number) => boolean
  updateTask: (id: number, description: string, completed: boolean) => Task | undefined
}
