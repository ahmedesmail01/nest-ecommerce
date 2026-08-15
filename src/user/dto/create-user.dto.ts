import { IsEmail, IsString, MaxLength, MinLength, IsOptional, IsEnum, IsDate, IsNumber, Min, Max, IsBoolean, IsUrl } from "class-validator";

export class CreateUserDto {

    /*
    
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
    */

    @IsString({ message: "Name must be a string" })
    @MinLength(3, { message: "Name must be at least 3 characters long" })
    @MaxLength(30, { message: "Name must be less than 30 characters long" })
    name: string;

    @IsString({ message: "Email must be a string" })
    @IsEmail({}, { message: "Email must be a valid email address" })
    email: string;

    @IsString({ message: "Password must be a string" })
    @MinLength(6, { message: "Password must be at least 6 characters long" })
    @MaxLength(30, { message: "Password must be less than 30 characters long" })
    password: string;

    @IsString({ message: "Role must be a string" })
    @IsEnum(['user', 'admin'], { message: "Role must be either user or admin" })
    @IsOptional()
    role: string;

    @IsString({ message: "Avatar must be a string" })
    @IsOptional()
    @IsUrl({}, { message: "Avatar must be a valid URL" })
    avatar: string;

    @IsNumber({}, { message: "Age must be a number" })
    @Min(18, { message: "Age must be at least 18 years old" })
    @Max(100, { message: "Age must be less than 100 years old" })
    age: number;

    @IsString({ message: "Phone number must be a string" })
    phoneNumber: string;

    @IsString({ message: "Address must be a string" })
    address: string;

    @IsBoolean({ message: "Active must be a boolean" })
    @IsOptional()
    active: boolean;

    @IsString({ message: "Verification code must be a string" })
    @IsOptional()
    verificationCode: string;

    @IsDate({ message: "Verification code expiry must be a date" })
    @IsOptional()
    verificationCodeExpiry: Date;

    @IsString({ message: "Gender must be a string" })
    @IsEnum(["male", "female"], { message: "Gender must be either male or female" })
    @IsOptional()
    gender: string;

}
