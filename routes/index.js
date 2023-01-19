import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.send("Bienevenidos a mi aplicacion de tareas");
});

export default router;
