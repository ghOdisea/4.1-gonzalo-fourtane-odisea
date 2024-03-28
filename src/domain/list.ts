import Task from "./task"

export default class List{
    tasksList: Task[]

    constructor(){
        this.tasksList = []
    }
    
    addTask(task : Task){
        this.tasksList.push(task)
        return task
    }
    removeTask(task: Task){
        if (!task.completed){
            task.check()
        }
        if (task.completed){
            let actualTask = this.tasksList.findIndex((tarea) => {
                task.description == tarea.description
            })
        this.tasksList.splice(actualTask,1)
       }
    }
}