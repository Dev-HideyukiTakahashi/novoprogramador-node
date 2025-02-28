import { NextFunction, Router, Request, Response } from 'express';
import TaskController from './controllers/TaskController';

const router = Router();
const taskController = new TaskController();

// Middleware de autenticação
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    // validar o token
    next();
  } else {
    res.json({ message: 'Token não informado' });
  }
}


router.get('/task', taskController.getAll);
router.get('/task/:id_task', authMiddleware, taskController.get); // aplicando middleware antes de chamar o método get
router.post('/task', taskController.insert);
router.put('/task/:id_task', taskController.update);
router.delete('/task/:id_task', taskController.delete);

export default router;