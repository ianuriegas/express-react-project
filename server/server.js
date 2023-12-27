const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/express-react-project");

// ------------------------------------------------- //
// Adding DB info to website                         //
// 1) Create sample data in MongoDB compass          //
// 2) Create a schema for the collection             //
// 3) Create a model                                 //
// 4) Utilize the api '/' to get info from UserModel //
// ------------------------------------------------- //

// ------------------------------------------------- //
// USERS                                             //
// ------------------------------------------------- //

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String },
  password: { type: String },
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

// POST route to insert a new user
app.post("/users", async (req, res) => {
  const userData = req.body;

  try {
    // Hash the user's password before saving it
    const hashedPassword = await bcrypt.hash(userData.password, 10); // 10 is the number of salt rounds

    const newUser = new UserModel({
      _id: new mongoose.Types.ObjectId(),
      username: userData.username,
      password: hashedPassword, // Store the hashed password in the database
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to insert user." });
  }
});

// API LISTENER
app.listen(5001, () => {
  console.log("Server started on port 5001");
});
