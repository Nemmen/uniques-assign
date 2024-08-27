import Student from "../model/student.js";

export const createStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new Student(student);
  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ errors: "Institute not found" });
    }
    res.send("Successfully deleted student");
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log(error);
  }
}