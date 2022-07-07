import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    example: 'ADMIN',
    description: "Role's value",
  })
  readonly value: string;

  @ApiProperty({
    example: 'Administrators of the web-application',
    description: "Role's description",
  })
  readonly description: string;
}
