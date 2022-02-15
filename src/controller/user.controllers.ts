import { User } from "../interface/user.interface";
import { ListUsers } from "../types";

export const listUsers: ListUsers = (req, res) => {
    const user: User = {
        id: '1',
        firstName: 'Sergio',
        lastName: 'Ramirez',
        note: 'Test'
    };

    res.status(200).json({ user: [user] })
}