import { Schema, model, Types } from 'mongoose';

import { User } from '../interface/user.interface';

const UserSchema = new Schema<User>({
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
}, { versionKey: false });

export default model<User>('User', UserSchema);