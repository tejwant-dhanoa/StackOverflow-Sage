// backend/routes/questions.js
const express = require("express");
const axios = require("axios");
const Question = require("../models/Question");

const router = express.Router();

// Submit Question + Get Prediction
router.post("/predict", async (req, res) => {
  try {
    const { email, title, body, tags } = req.body;

    if (!email || !title || !body || !tags) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await axios.post(
      "https://stackoverflowsage-ml-api.onrender.com/predict",
      {
        title,
        body,
        tags,
      }
    );

    console.log("Raw ML API response:", response.data); // New Debug

    const quality = response.data.prediction;
    console.log("Prediction received:", { prediction: quality }); // Existing Debug

    // Save Question in DB
    const newQuestion = new Question({
      email,
      title,
      body,
      tags,
      quality,
    });

    await newQuestion.save();

    res.status(200).json({
      message: "Question submitted successfully",
      quality,
    });
  } catch (error) {
    console.error("Prediction Error:", error);
    res.status(500).json({ message: "Error processing question", error });
  }
});

// Fetch All Questions for a User
router.get("/history", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const questions = await Question.find({ email }).sort({ createdAt: -1 });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error });
  }
});

module.exports = router;
