import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: String;
    email: String;
    srn: String;
    graduationYear: String;
    contestCode: String;
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    srn: {
        type: String,
    },
    graduationYear: {
        type: String,
        required: true,
    },
    contestCode: {
        type: String,
        required: true,
    },
});

export default model<IUser>('user', userSchema);
