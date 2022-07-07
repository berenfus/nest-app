import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({
    example: 'ADMIN',
    description: 'Banning reason',
  })
  @IsString({ message: 'Must be a string' })
  readonly banReason: string;

  @ApiProperty({
    example: '1',
    description: "User's id",
  })
  @IsNumber({}, { message: 'Must be a number' })
  readonly userId: number;
}
