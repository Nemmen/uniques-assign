import mongoose from "mongoose";


const connectDB = async () => {
	  try {
	const connection = await mongoose.connect('mongodb://localhost:27017/intitute', {
	  useUnifiedTopology: true,
	  useNewUrlParser: true,
	});

	console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
	console.error(`Error: ${error.message}`);
	process.exit(1);
  }
}

export default connectDB;