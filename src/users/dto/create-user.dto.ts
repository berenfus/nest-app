import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'myemail@mail.com',
    description: 'Unique email',
  })
  @IsEmail({}, { message: 'Incorrect email' })
  @IsString({ message: 'Must be a string' })
  readonly email: string;

  @ApiProperty({
    example: 'qwerty',
    description: 'Password',
  })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'More than 4, less than 16' })
  readonly password: string;
}
