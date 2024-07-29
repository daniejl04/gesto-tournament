import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('tournaments')
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}
      @Post()
      @ApiOperation({ summary: 'Create tournament' })
      @ApiResponse({ status: 201, description: 'The tournament has been successfully created.' })
      @ApiResponse({ status: 400, description: 'Invalid input' })
      @ApiBody({ type: CreateTournamentDto })
    create(@Body() createTournamentDto: any) {
      return this.tournamentService.create(createTournamentDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all tournaments' })
    @ApiResponse({ status: 200, description: 'Return all tournaments.' })
    findAll() {
      return this.tournamentService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get tournament by id' })
    @ApiResponse({ status: 200, description: 'Return tournament by id.' })
    @ApiResponse({ status: 404, description: 'Tournament not found' })
    findOne(@Param('id') id: string) {
      return this.tournamentService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update tournament by id' })
    @ApiResponse({ status: 200, description: 'The tournament has been successfully updated.' })
    @ApiResponse({ status: 404, description: 'Tournament not found' })
    @ApiBody({ type: UpdateTournamentDto })
    update(@Param('id') id: string, @Body() updateTournamentDto: any) {
      return this.tournamentService.update(id, updateTournamentDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete tournament by id' })
    @ApiResponse({ status: 200, description: 'The tournament has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Tournament not found' })
    remove(@Param('id') id: string) {
      return this.tournamentService.remove(id);
    }
  

}
