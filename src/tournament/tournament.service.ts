import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tournament, TournamentDocument } from './entities/tournament.entity';
import { Model } from 'mongoose';

@Injectable()
export class TournamentService {
  constructor(@InjectModel(Tournament.name) private tournamentModel: Model<TournamentDocument>) {}

  async create(createTournamentDto: any): Promise<Tournament> {
    const createdTournament = new this.tournamentModel(createTournamentDto);
    return createdTournament.save();
  }

  async findAll(): Promise<Tournament[]> {
    return this.tournamentModel.find().exec();
  }

  async findOne(id: string): Promise<Tournament> {
    const tournament = await this.tournamentModel.findById(id).exec();
    if (!tournament) {
      throw new NotFoundException(`Tournament with ID ${id} not found`);
    }
    return tournament;
  }

  async update(id: string, updateTournamentDto: any): Promise<Tournament> {
    const updatedTournament = await this.tournamentModel.findByIdAndUpdate(id, updateTournamentDto, { new: true }).exec();
    if (!updatedTournament) {
      throw new NotFoundException(`Tournament with ID ${id} not found`);
    }
    return updatedTournament;
  }

  async remove(id: string): Promise<any> {
    const result = await this.tournamentModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Tournament with ID ${id} not found`);
    }
    return result;
  }
  
}
