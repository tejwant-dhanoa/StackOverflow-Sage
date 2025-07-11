// backend/models/Question.js
const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: { type: String, required: true },
    quality: { type: String }, // Prediction result
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
