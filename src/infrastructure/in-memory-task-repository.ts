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
  getAllTasks (): Task[] {
    return tasks
  }

  getTaskById (taskID: number): Task | undefined {
    const task = tasks.find(task => task.id === taskID)

    switch (task) {
      case undefined:
        console.error('Task not found')
        return undefined
      default:
        return task
    }
  }

  createTask (description: string): Task | undefined {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0
    const newId = lastId + 1
    const newTask = new Task(newId, description)
    tasks.push(newTask)
    return newTask
  }

  deleteTask (id: number): boolean {
    const indexDeleteId = tasks.findIndex((task) => task.id === id)
    if (indexDeleteId !== -1) {
      tasks.splice(indexDeleteId, 1)
      return true
    } else {
      return false
    }
  }

  checkTask (id: number): Task | undefined {
    const task = tasks.find(task => task.id === id)
    if (task !== undefined) {
      task.completed = !task.completed
      return task
    } else {
      console.error('Task not found')
    }
  }

  updateTask (id: number, description: string, completed: boolean): Task | undefined {
    const task = tasks.find(task => task.id === id)
    if (task !== undefined) {
      task.description = description
      task.completed = completed
      return task
    } else {
      console.log('Task not found')
    }
  }
}
