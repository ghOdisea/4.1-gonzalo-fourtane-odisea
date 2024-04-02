export default class Task {
    id: string
    description: string
    completed: boolean

    constructor(id: string, description: string){
        this.id = id
        this.description = description
        this.completed = false
    }
}