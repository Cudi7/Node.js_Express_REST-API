import mongoose from 'mongoose';

function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    console.log('connected to DB!');
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB;
