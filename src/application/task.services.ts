import type Task from '../domain/task';
import { type TaskRepository } from '../domain/task.repository';

export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async getTaskById(taskID: number): Promise<Task | undefined> {
    const task = await this.taskRepository.getTaskById(taskID);
    return task;
  }
}
