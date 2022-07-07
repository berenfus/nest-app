import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Must be a string' })
  @ApiProperty({
    example: 'ADMIN',
    description: 'New role for a user',
  })
  readonly value: string;

  @IsNumber({}, { message: 'Must be a number' })
  @ApiProperty({
    example: '1',
    description: "User's id",
  })
  readonly userId: number;
}
