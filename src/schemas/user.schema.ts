import { Schema, model } from 'mongoose';

import { User } from '../interface/user.interface';

const UserSchema = new Schema<User>({
    id: {
        type: String,
        required: [true, 'id is required']
    },
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
    note: {
        type: String,
        required: [true, 'note is required']
    }
});

export default model<User>('User', UserSchema);