import { Router } from 'express';
import { UserController } from './controllers/UserControllers';

const userController = new UserController();

export const router = Router();

router.get('/', userController.getAllusers);

router.post('/user', userController.createUser);
