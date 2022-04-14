import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
});

export const Books = mongoose.model("books", bookSchema);
