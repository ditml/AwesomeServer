import * as mongoose from 'mongoose';

export const ChatSchema = new mongoose.Schema({
  chat_id: Number,
  title: String,
  members: [Number],
  messages: [String],
});
