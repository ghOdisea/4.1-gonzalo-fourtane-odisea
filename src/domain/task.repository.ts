import type Task from './task'

export interface TaskRepository {
  getAllTasks: () => Promise <Task[]>
  getTaskById: (taskID: string) => Promise< Partial<Task>>
}
