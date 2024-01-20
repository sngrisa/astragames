const { model, Schema } = require("mongoose");

const GameSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  plattform: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = model("Game", GameSchema);
