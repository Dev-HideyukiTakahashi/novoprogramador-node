import { Task } from '../models/Task';

class TaskRepository {

  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  get(id: string): Task[] {
    return this.tasks;
  }

  getAll(): Task[] {
    return this.tasks;
  }

  insert(data: Task): Task {
    this.tasks.push(data);
    return data;
  }

  update(index: number, data: Task): Task[] {
    this.tasks[index] = data
    return this.tasks;
  }

  delete(index: number) {
    this.tasks.splice(index, 1);
  }
}

export default TaskRepository;