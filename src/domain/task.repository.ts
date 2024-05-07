import type Task from './task';

export interface TaskRepository {
  getTaskById: (taskID: number) => Task | undefined;
}
