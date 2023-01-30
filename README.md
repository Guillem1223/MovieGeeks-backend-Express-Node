# MovieGeeks-backend-Express-Node-Mongo

## Description

This is a backend module for a project.

## Main files

The main file is `index.js`.

## Scripts

To start the server, run `npm start`. To run the server in development mode, use `npm run dev`.

## Dependencies

The following packages are required for the project to run:

- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose

## Dev Dependencies

The following packages are required for development:

- nodemon

## Routes

The following routes are available for the project:

### Users

- `GET /`: returns all users.
- `GET /:id`: returns a specific user.
- `PATCH /users/:userId/rent/:movieId`: rents a movie for a user.
- `PATCH /users/:userId/delete/:movieId`: deletes a movie from a user.
- `DELETE /delete/:id`: deletes a user.

### Movies

- `GET /`: returns all movies.
- `GET /:id`: returns a specific movie.

### Register/Login

- `POST /register`: creates a new user.
- `POST /login`: logs in an existing user.
