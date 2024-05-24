import mongoose from "mongoose";

// const MONGODB_URL =
//   "mongodb+srv://imomkarlondhe:xitZmPjsE5oujzSY@cluster0.jzkujkx.mongodb.net/reacttaskmanagment";
const connectDB = async () => {
  try {
    const response = await mongoose.connect(`${process.env.MONGODB_URL}`);
    if (response) {
      console.log("Connected to DB");
    }
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
