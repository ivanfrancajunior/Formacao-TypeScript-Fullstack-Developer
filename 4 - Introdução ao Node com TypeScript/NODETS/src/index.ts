import express, { Request, Response } from 'express';

const server = express();
server.use(express.json());

server.listen('3001', () => console.log('server up! 🔥'));

server.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Olá amigos do mundo!' });
});
server.post('/user', (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  return res.status(201).json({ message: 'usuário criado' });
});
