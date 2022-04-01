import mongoose from 'mongoose';

const URL_CONNECT = process.env.URL_MONGODB!

const connectDB = () => {
    mongoose.connect(URL_CONNECT);
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to the database"))
}

export {connectDB}