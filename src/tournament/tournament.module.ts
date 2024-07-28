import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tournament, TournamentSchema } from './entities/tournament.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tournament.name, schema: TournamentSchema }])],
  controllers: [TournamentController],
  providers: [TournamentService],
})
export class TournamentModule {}
