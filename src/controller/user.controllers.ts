import { User } from "../interface/user.interface";
import { CreateUser, DeleteUser, ListUsers, UpdateUser } from "../types";

import UserSchema from '../schemas/user.schema';
import { Types } from "mongoose";

export const listUsers: ListUsers = async (req, res) => {
    try {
        const users = await UserSchema.find();
        res.status(200).json({ users })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Couldn\'t get the users, something happened!' })
    }
};

export const createUser: CreateUser = async (req, res) => {
    const { firstName, lastName, note } = req.body;

    try {
        const user = await UserSchema.create({ firstName, lastName, note });
        res.status(201).json({ ok: true, user });
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ errors: error?.errors })
    }
};

export const updateUser: UpdateUser = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedUser = await UserSchema.updateOne({ _id: new Types.ObjectId(id) }, req.body);
        if (updatedUser.matchedCount === 0)
            res.status(404).json({ message: 'No user found to update' });
        res.status(200).json({ message: 'User updated successfully' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
};

export const deleteUser: DeleteUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const deletedUser = await UserSchema.deleteOne({ _id: new Types.ObjectId(id) });
        if (deletedUser.deletedCount === 0)
            res.status(404).json({ message: 'No user found to delete' })
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    };
};