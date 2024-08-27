import mongoose from "mongoose";

const institueSchema = new mongoose.Schema({
	institution: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Institute", institueSchema);
