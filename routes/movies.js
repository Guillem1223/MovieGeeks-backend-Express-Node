import express from "express";
var router = express.Router();

import MovieController from "../controllers/MovieController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET movies listing. */
router.get("/", MovieController.getAll);
router.get("/:id", MovieController.getById);
export default router;
