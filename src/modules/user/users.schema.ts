import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  user_id: Number,
  user_name: String,
  mobile: Number,
  email: String,
});
