import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './persistence/db-Config';
import { PersistenceModule } from './persistence/persistence.module';
import { TournamentModule } from './tournament/tournament.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    PersistenceModule,
    TournamentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
