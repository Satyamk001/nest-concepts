import { isEmail, IsEmail, IsNotEmpty, IsString, minLength, MinLength } from 'class-validator';

export class RegisterDto{
  @IsEmail({}, {message: 'Invalid email address'})
email: string;

@IsString()
@MinLength(6,{message: 'Password must be at least 6 characters long'})
password: string;
}