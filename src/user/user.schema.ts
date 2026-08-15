
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, min: [3, 'Name must be at least 3 characters long'], max: [30, 'Name must be less than 30 characters long'], type: String })
    name: string;

    @Prop({ required: true, unique: true, lowercase: true, trim: true, type: String })
    email: string;

    @Prop({ required: true, min: [6, 'Password must be at least 6 characters long'], max: [30, 'Password must be less than 30 characters long'], type: String })
    password: string;

    @Prop({ type: String, enum: ['user', 'admin'], default: 'user' })
    role: string;

    @Prop({ type: String })
    avatar: string;

    @Prop({ type: Number, min: [18, 'Age must be at least 18 years old'], max: [100, 'Age must be less than 100 years old'], required: true })
    age: number;

    @Prop({ type: String, required: true })
    phoneNumber: string;

    @Prop({ type: String, required: true })
    address: string;

    @Prop({ type: Boolean, default: true })
    Active: boolean;

    @Prop({ type: String })
    verificationCode: string;

    @Prop({ type: Date })
    verificationCodeExpiry: Date;

    @Prop({ type: String, enum: ["male", "female"] })
    gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
