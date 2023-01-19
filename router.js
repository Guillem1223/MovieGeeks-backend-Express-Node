import { Router } from "express";
const router = Router();

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import moviesRouter from "./routes/movies.js";

// routes
router.use("/", indexRouter);
router.use("/users", usersRouter);
router.use("/movies", moviesRouter);

// auth
router.use("/auth", authRouter);

export default router;
