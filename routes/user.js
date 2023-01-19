import express from "express";
var router = express.Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.patch("/users/:userId/rent/:movieId", UserController.rentUserMovies);
router.patch("/users/:userId/delete/:movieId", UserController.deleteUserMovies);
router.delete("/delete/:id", UserController.deleteById);
export default router;
