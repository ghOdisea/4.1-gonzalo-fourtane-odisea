import Task from '../domain/task'
import type { TaskRepository } from '../domain/task.repository'

export const tasks: Task[] = [
  {
    id: 1,
    description: 'Soy una tarea 1',
    completed: false
  },
  {
    id: 2,
    description: 'Soy una tarea 2',
    completed: false
  },
  {
    id: 3,
    description: 'Soy una tarea 3',
    completed: false
  },
  {
    id: 4,
    description: 'Soy una tarea 4',
    completed: true
  },
  {
    id: 5,
    description: 'Soy una tarea 5',
    completed: true
  }
]

export class InMemoryTaskRepository implements TaskRepository {
  async getAllTasks (): Promise<Task[]> {
    return tasks
  }

  async getTaskById (taskID: number): Promise<Task | undefined> {
    const task = tasks.find(task => task.id === taskID)

    switch (task) {
      case undefined:
        console.error('Task not found')
        return undefined
      default:
        return task
    }
  }

  async createTask (id: number, description: string): Promise<Task | undefined > {
    const validID = tasks.find(task => task.id === id)
    if (validID === undefined) {
      const newTask = new Task(id, description)
      tasks.push(newTask)
      return newTask
    } else {
      console.error('ID already exists')
      return undefined
    }
  }

  async deleteTask (id: number): Promise<boolean> {
    const indexDeleteId = tasks.findIndex((task) => task.id === id)
    if (indexDeleteId !== -1) {
      tasks.splice(indexDeleteId, 1)
      return true
    } else {
      console.error('Task not found')
      return false
    }
  }

  async updateTask (id: number): Promise<Task | undefined> {
    const task = tasks.find(task => task.id === id)
    if (task !== undefined) {
      task.completed = !task.completed
      return task
    } else {
      console.error('Task not found')
    }
  }
}
