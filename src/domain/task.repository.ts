import Task from "./task";

export interface TaskRepository{
    getTaskById(taskID: string ): Promise<Partial<Task>>
    getAllTasks(): Promise<Task[]>
}