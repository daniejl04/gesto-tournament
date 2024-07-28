// src/tournaments/schemas/tournament.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TournamentDocument = Tournament & Document;

@Schema()
export class Tournament {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop({ required: true })
  estado: string;

  @Prop({ type: Date })
  fechaInicio: Date;

  @Prop({ type: Date })
  fechaFin: Date;

}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);

