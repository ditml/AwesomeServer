import * as mongoose from 'mongoose';

export const MsgSchema = new mongoose.Schema({
  msg_id: String,
  msg_type: String,
  from_id: String,
  to_id: String,
  body: String,
});
