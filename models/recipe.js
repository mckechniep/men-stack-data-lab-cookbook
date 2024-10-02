const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true,
   },
   instructions: {
    type: String,
  required: true,
  },
  owner: {
    // type: because ObjectId is a type from Mongoose, not a type from JavaScript   
     type: mongoose.Schema.Types.ObjectId, ref: "User",
     required: true,
  },
  ingredients: {
    type: mongoose.Schema.Types.ObjectId, ref: "Ingredient",
     required: true,
  },
 });

const Recipe = mongoose.model("Recipe", recipeSchema);