import type { Request, Response } from 'express';
import { taskService } from '../dependencies.js';

export class TaskController {
  async getTaskById(req: Request, res: Response): Promise<void> {
    const taskId = Number(req.params.id);
    const task = await taskService.getTaskById(taskId);
    if (task === undefined) {
      res.status(404).send('Task not found');
    } else {
      res.status(200).json(task);
    }
  }
}
