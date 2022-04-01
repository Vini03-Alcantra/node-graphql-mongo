import mongoose from 'mongoose';

const URL_CONNECT = process.env.URL_MONGODB!

const connectDB = () => {
    mongoose.connect(URL_CONNECT);
}

export {connectDB}