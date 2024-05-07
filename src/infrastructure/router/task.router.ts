/* eslint-disable @typescript-eslint/no-misused-promises */
import { TaskController } from '../controllers/task.controller';
import { BaseRouter } from './router';

export class TaskRouter extends BaseRouter<TaskController> {
  constructor() {
    super(TaskController);
  }

  routes(): void {
    this.router.get('/task/:id', async (req, res) => {
      void this.controller.getTaskById(req, res);
    });
  }
}
