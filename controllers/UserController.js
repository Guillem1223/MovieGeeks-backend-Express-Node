import User from "../models/User.js";

const UserController = {};

UserController.getAll = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Get all users retrieved succsessfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};
UserController.getById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const user = await User.findOne({ _id: id }).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User Data Retrieved Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
UserController.rentUserMovies = async (req, res) => {
  console.log(req.params);
  try {
    console.log(req.params.userId);
    const user = await User.findById(req.params.userId);
    const movie = req.body;
    console.log(movie);
    // const match = user.movies.find((m) => m._id == movie._id);
    const match = false;
    if (match) {
      res.json({
        message: "User already have this movie",
        inserted: false,
      });
    } else {
      const updatedUser = await User.updateOne(
        { _id: req.params.userId },
        { $push: { movies: movie } }
      );
      res.json({
        message: "User movies updated successfully",
        data: updatedUser,
        inserted: true,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
UserController.deleteUserMovies = async (req, res) => {
  console.log(req.params);
  try {
    const user = await User.findById(req.params.userId);
    const movie = req.body;

    const match = false;
    if (match) {
      res.json({
        message: "User already have this movie",
        inserted: false,
      });
    } else {
      const updatedUser = await User.updateOne(
        { _id: req.params.userId },
        { $pull: { movies: req.params.movieId } }
      );
      res.json({
        message: "User movies updated successfully",
        data: updatedUser,
        inserted: true,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
UserController.deleteById = async (req, res) => {
  try {
    const deletedOne = await User.deleteOne({ _id: req.params.id });
    res.json({
      message: `${req.params.id} DELETED`,
      data: deletedOne,
    });
  } catch (error) {
    res.status(500).send("internal error");
  }
};

export default UserController;
