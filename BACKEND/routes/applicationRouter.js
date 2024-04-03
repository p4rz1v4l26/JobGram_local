import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
} from "../controllers/applicationController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("");
router.get("");
router.delete("/delete/:id",isAuthorized,jobseekerDeleteApplication);

export default router;
