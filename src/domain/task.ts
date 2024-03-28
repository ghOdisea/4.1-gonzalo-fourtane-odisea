export default class Task {
    description: string
    completed: boolean

    constructor(description : string){
        this.description = description
        this.completed = false
    }

    check(){
        this.completed = !this.completed
    }
}