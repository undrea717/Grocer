 const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrocerySchema = new Schema({
  ingredients: { type: String, required: true }
  
});

const Grocery = mongoose.model("Grocery", GrocerySchema);

module.exports = Grocery;
