import express from "express";
import { createInstitute , getInstitutes ,deleteInstitute} from "../controller/institute.js";

// Create an instance of Router
const router = express.Router();

// Define your route using the router instance
router.post("/create", createInstitute);
router.get("/get", getInstitutes);
router.delete("/delete/:id", deleteInstitute);

// Export the router instance
export default router;
