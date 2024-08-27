import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  batch: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  university: {	
	type: String,
	required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
