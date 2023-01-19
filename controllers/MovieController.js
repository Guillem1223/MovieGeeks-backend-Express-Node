import Movies from "../models/Movies.js";

const MovieController = {};

MovieController.getAll = async (req, res) => {
  try {
    const movies = await Movies.find();

    return res.status(200).json({
      success: true,
      message: "Get all movies retrieved succsessfully",
      data: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving movies",
      error: error.message,
    });
  }
};

MovieController.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movies.findOne({ id: id });

    return res.status(200).json({
      success: true,
      message: "Get all movies retrieved succsessfully",
      data: movie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving movies",
      error: error.message,
    });
  }
};
export default MovieController;
