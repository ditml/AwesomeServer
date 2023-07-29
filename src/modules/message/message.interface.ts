import { Document } from 'mongoose';

export interface Message extends Document {
  readonly msg_id: string;
  readonly msg_type: string;
  readonly from_id: string;
  readonly to_id: string;
  readonly body: string;
}
