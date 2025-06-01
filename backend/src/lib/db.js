import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    console.log('MONGODB_URL:', process.env.MONGODB_URL); // Debug
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 5000,
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};