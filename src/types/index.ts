import { Request, Response } from 'express';

export type ListUsers = (req: Request, res: Response) => void;
export type CreateUser = (req: Request, res: Response) => void;
export type UpdateUser = (req: Request, res: Response) => void;
export type DeleteUser = (req: Request, res: Response) => void;