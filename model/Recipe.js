const { Schema, model } = require("mongoose");

const recipe = new Schema(
  {
    name: String,
    season: [{ type: String, enum: ["winter", "spring", "autumn", "summer"] } ],
    duration: { type: String, enum: ['1', '2', '3'] },
    mood: [{ type: String, enum: ["comfort", "energy", "healthy"] } ],
    type: [{ type: String, enum: ["apero", "brunch", "petit-dejeuner", "diner" , "dejeuner", "dessert"] } ],
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'] },
    ingredient: [String],
    
  },
  {
    timestamps: true,
  }
);

module.exports = model("Recipe", recipe);
