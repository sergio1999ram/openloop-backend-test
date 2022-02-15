import express, { Request, Response } from 'express';
import cors from 'cors';

import 'dotenv/config';
import './db';

import userRoutes from './routes/user.routes';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);

// Routes
app.get('/', (req: Request, res: Response): void => {
    res.status(200).json({ message: 'Hello world from Node with Typescript!' })
});

app.listen(3001, (): void => {
    console.log('Server started on port 3001');
});