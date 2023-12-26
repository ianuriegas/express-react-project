const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/express-react-project");

// ------------------------------------------------- //
// Adding DB info to website                         //
// 1) Create sample data in MongoDB compass          //
// 2) Create a schema for the collection             //
// 3) create a model                                 //
// 4) utilize the api '/' to get info from UserModel //
// ------------------------------------------------- //

// ------------------------------------------------- //
// USERS                                             //
// ------------------------------------------------- //

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  users: [{ type: String }],
});

const UserModel = mongoose.model("User", UserSchema);

app.get("/users", (req, res) => {
  UserModel.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      console.log(err);
    });
});

// API LISTENER
app.listen(5001, () => {
  console.log("Server started on port 5001");
});
