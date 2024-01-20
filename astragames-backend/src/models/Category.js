const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = model("Category", CategorySchema);
