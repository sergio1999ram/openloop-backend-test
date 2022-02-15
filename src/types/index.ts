import { Request, Response } from 'express';

export type ListUsers = (req: Request, res: Response) => void;