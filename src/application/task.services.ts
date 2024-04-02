import { TaskRepository } from "../domain/task.repository";

export class TaskService {

    constructor(private readonly taskRepository : TaskRepository){
        this.taskRepository = taskRepository
    }

    async getAllTasks(){
        const tasks = await this.taskRepository.getAllTasks()
        return tasks
    }

    async getTaskById(taskID: string){

        const task = await this.taskRepository.getTaskById(taskID)
        // if(!task){throw new Error(`Task not found: ${task}`)}
        console.log(task)
        return task
    }
}