const express = require('express');
const { getFitnessAdvice } = require('../controllers/fitnessController');
const router = express.Router();

router.post('/advice', getFitnessAdvice);

module.exports = router;
