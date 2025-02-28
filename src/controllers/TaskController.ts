import { Request, Response } from 'express';
import TaskService from '../services/TaskService';
import { v4 as uuidv4 } from 'uuid';

const taskService = new TaskService();

class TaskController {
  constructor() {

  }

  get(req: Request, res: Response) {
    const { id_task } = req.params;

    if (id_task) {
      const result = taskService.get(id_task);
      res.json(result).status(200);
    } else {
      res.json({ error: 'Invalid parameters' }).status(400);
    }
  }

  getAll(req: Request, res: Response) {
    const { status } = req.query;

    if (status && (status === 'progress' || status === 'complete')) {
      const result = taskService.getAll(status);
      res.json(result).status(200);
    }
    else {
      res.json({ error: 'Invalid parameters' }).status(400);
    }
  }

  update(req: Request, res: Response) {
    const { id, descricao, data, status } = req.body;
    const { id_task } = req.params;

    if (id && descricao && data && status) {
      const result = taskService.update(id_task, req.body);
      res.json(result).status(200);
    } else {
      res.json({ error: "Invalid parameters" }).status(400);
    }
  }

  insert(req: Request, res: Response) {
    const { descricao, data, status } = req.body;
    if (descricao && data && status) {
      req.body.id = uuidv4();
      const result = taskService.insert(req.body)
      res.json(result).status(201);
    } else {
      res.json({ error: "Invalid parameters" }).status(400);
    }
  }

  delete(req: Request, res: Response) {
    const { id_task } = req.params;

    if (id_task) {
      taskService.delete(id_task);
      res.status(200).json({ message: "Task deleted" });
    } else {
      res.status(400).json({ error: "Invalid parameters" });
    }
  }

}

export default TaskController;