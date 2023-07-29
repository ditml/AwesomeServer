import { Document } from 'mongoose';

export interface Chat extends Document {
  readonly chat_id: number;
  readonly title: string;
  readonly members: number[];
  readonly messages: string[];
}
