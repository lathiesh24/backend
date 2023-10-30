const express = require('express');
const router = express.Router();
const Score = require('../models/scoreModel');

router.post('/submit-score', async (req, res) => {
    const { teamName, score } = req.body;
    try {
        const newScore = new Score({ teamName, score });
        await newScore.save();
        res.status(200).send('Score saved successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving the score');
    }
});

module.exports = router;
