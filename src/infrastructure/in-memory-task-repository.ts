import type Task from '../domain/task';
import type { TaskRepository } from '../domain/task.repository';

export const tasks: Task[] = [
  {
    id: 1,
    description: 'Soy una tarea 1',
    completed: false,
  },
  {
    id: 2,
    description: 'Soy una tarea 2',
    completed: false,
  },
  {
    id: 3,
    description: 'Soy una tarea 3',
    completed: false,
  },
  {
    id: 4,
    description: 'Soy una tarea 4',
    completed: true,
  },
  {
    id: 5,
    description: 'Soy una tarea 5',
    completed: true,
  },
];

export class InMemoryTaskRepository implements TaskRepository {
  getTaskById(taskID: number): Task | undefined {
    const task = tasks.find((task) => task.id === taskID);
    switch (task) {
      case undefined:
        console.error('Task not found');
        return undefined;
      default:
        return task;
    }
  }
}
