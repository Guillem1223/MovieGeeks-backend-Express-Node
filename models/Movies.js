import { Schema, model } from "mongoose";

const MoviesSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Movie = model("Movie", MoviesSchema);
export default Movie;
