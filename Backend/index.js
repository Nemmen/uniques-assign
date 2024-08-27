import express from "express";
import connectDB from "./config/database.js";
import instituteRouter from "./routes/institute.js";
import studentRouter from "./routes/student.js";
import cors from "cors";

const PORT = 5000;
const app = express();
app.use(cors());

app.use(express.json());
app.use("/institute", instituteRouter);
app.use("/student", studentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
