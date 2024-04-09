import type Task from '../domain/task'
import type { TaskRepository } from '../domain/task.repository'

export const tasks: Task[] = [
  {
    id: '1',
    description: 'Soy una tarea 1',
    completed: false
  },
  {
    id: '2',
    description: 'Soy una tarea 2',
    completed: false
  },
  {
    id: '3',
    description: 'Soy una tarea 3',
    completed: false
  },
  {
    id: '4',
    description: 'Soy una tarea 4',
    completed: true
  },
  {
    id: '5',
    description: 'Soy una tarea 5',
    completed: true
  }
]

export class InMemoryTaskRepository implements TaskRepository {
  async getAllTasks (): Promise<Task[]> {
    console.log('Se han solicitado todas las tareas')
    console.log(tasks)
    return tasks
  }

  async getTaskById (taskID: string): Promise<Task> {
    const task: Task | undefined = tasks.find((task) => taskID === task.id)
    if (task === undefined) throw new Error('No se encuentra la tarea')
    return task
  }
}
