import type Task from './task'

export interface TaskRepository {
  getAllTasks: () => Task[]
  getTaskById: (taskID: number) => Task | undefined /* sin promise */
  createTask: (id: number, description: string) => Task | undefined
  // deleteTask: (id: number) => Promise<boolean>
  // updateTask: (id: number) => Promise<Task | undefined>
}
