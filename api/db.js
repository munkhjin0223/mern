import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost/mern";

const connectionFactory = async () => {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const connect = connectionFactory;
