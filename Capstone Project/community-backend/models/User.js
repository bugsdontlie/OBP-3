import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 10,
    maxLenght: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  hashedPassword: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    enum: ["host", "member"],
    default: "member",
  },
  joinedCommunities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "community",
    },
  ],
  rsvpedEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  ],
});
