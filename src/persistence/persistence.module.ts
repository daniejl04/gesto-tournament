import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import dbConfig from './db-Config';

@Module({
    imports: [
      MongooseModule.forRootAsync({
        useFactory: (configService: ConfigType<typeof dbConfig>) => {
          const { db, env } = configService;
          const uriDb =
            env === process.env.ENVIRONMENT
              ? `${db.connection}${db.host}`
              : `mongodb+srv://${db.user}:${db.password}@${db.cluster}.fdomenl.mongodb.net/`;
          return {
            uri: uriDb,
          };
        },
        inject: [dbConfig.KEY],
      }),
    ],
  })
  export class PersistenceModule {}
