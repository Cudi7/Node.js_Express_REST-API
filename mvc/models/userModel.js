import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Users', userSchema);
