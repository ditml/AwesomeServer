import { Document } from 'mongoose';

export interface User extends Document {
  readonly user_id: number;
  readonly user_name: string;
  readonly mobile: number;
  readonly email: string;
}
