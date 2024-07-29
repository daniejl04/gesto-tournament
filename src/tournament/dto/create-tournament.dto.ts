import { ApiProperty } from "@nestjs/swagger";

export class CreateTournamentDto {
    @ApiProperty({ example: '1', description: 'The ID of the tournament' })
    id:number;
   
    @ApiProperty({ example: 'Halo Championship', description: 'The name of the tournament' })
    name: string;
  
    @ApiProperty({ example: 'Annual Halo championship', description: 'The description of the tournament' })
    description: string;
  
    @ApiProperty({ example: 'active', description: 'The current state of the tournament' })
    state: string;
  
    @ApiProperty({ example: '2024-07-01', description: 'The start date of the tournament' })
    initDate: Date;

    @ApiProperty({ example: '2024-07-10', description: 'The end date of the tournament' })
    endDate: Date;
}
