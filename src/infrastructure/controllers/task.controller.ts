import { Request , Response } from "express";
import { inMemoryTaskRepository, taskService } from "../dependencies.js";

export class TaskController{

    constructor(){}

    getTasks(req: Request, res: Response){
        const tasks =  taskService.getAllTasks()
        console.log('controller', tasks)
        res.status(200).json(tasks)
    }

    getTaskById(req: Request, res: Response){
       const taskId = req.params.id
       
       console.log(typeof taskId)
       
       const task = taskService.getTaskById(taskId)

       res.status(200).json(task)

    }

    // createTask(req: Request, res: Response){
    //     let task = new TaskGetter().getTask(req.params.id) 
    //     res.status(200).json(task)
    // }
    // checkTask(req: Request, res: Response){
    //     let task = new TaskCreator
    //     task.createTask()
    //     res.status(200).json(task)
    // }
}

//