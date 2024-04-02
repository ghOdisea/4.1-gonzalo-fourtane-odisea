import Task from "./task";

export interface TaskRepository{
    getTaskById(taskID: string ): Promise<Task>
    getAllTasks(): Promise<Task[]>
}