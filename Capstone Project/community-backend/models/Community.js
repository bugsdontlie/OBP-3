import mongoose from "mongoose";

const communitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 500,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  category: {
    type: String,
    enum: ["chess", "mern", "cooking", "tech", "jobs", "sports", "politics"],
    required: true
  },
});
