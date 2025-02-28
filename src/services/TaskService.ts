import { Task } from '../models/Task';
import TaskRepository from '../repositories/TaskRepository';

const taskRepository = new TaskRepository();

class TaskService {


  constructor() {

  }

  get(id: string): Task {
    const result = taskRepository.get(id);
    const task = result.find(task => task.id === id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  getAll(status: string) {
    const result = taskRepository.getAll();
    const tasks: Task[] = [];
    result.map(task => {
      if (task.status === status) {
        tasks.push(task);
      }
    })
    return tasks;
  }

  insert(data: Task): Task {
    taskRepository.insert(data);
    return data;
  }

  update(id_task: string, data: Task) {
    const index = this.getIndexById(id_task);
    const result = taskRepository.update(index, data);
    const task = result.find(task => task.id === id_task);
    return task;
  }

  delete(id_task: string) {
    const index = this.getIndexById(id_task);
    const result = taskRepository.delete(index);
    return result;
  }

  getIndexById(id: string): number {
    const result = taskRepository.getAll();
    const index = result.findIndex(task => task.id === id);
    return index;
  }
}

export default TaskService;