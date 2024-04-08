import { TaskService } from "../application/task.services.js";
import { InMemoryTaskRepository } from "./in-memory-task-repository";

export const inMemoryTaskRepository = new InMemoryTaskRepository()
export const taskService = new TaskService(inMemoryTaskRepository)