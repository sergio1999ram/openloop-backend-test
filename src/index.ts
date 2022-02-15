import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
    res.status(200).json({ message: 'Hello world from Node with Typescript!' })
})

app.listen(3001, (): void => {
    console.log('Server started on port 3001');
})