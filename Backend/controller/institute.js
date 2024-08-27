import Institute from "../model/institute.js"; // Corrected model name

export const createInstitute = async (req, res) => {
  try {
    const newInstitute = new Institute(req.body); // Corrected instance name
    await newInstitute.save();
    res.status(201).json(newInstitute);
  } catch (error) {
    res.status(500).json({ errors: error.message }); // More specific error message
    console.log(error);
  }
};

export const getInstitutes = async (req, res) => {
  try {
    const institutes = await Institute.find();
    res.status(200).send({
      institutes: institutes,
    });
  } catch (error) {
    res.status(404).json({ errors: error.message }); // More specific error message
    console.log(error);
  }
};


export const deleteInstitute = async (req, res) => {
  try {
    const institute = await Institute.findByIdAndDelete(req.params.id);
    if (!institute) {
      return res.status(404).json({ errors: "Institute not found" });
    }
    res.status(200).json({ message: "Institute deleted successfully" });
  } catch (error) {
    res.status(500).json({ errors: error.message }); // More specific error message
    console.log(error);
  }
}