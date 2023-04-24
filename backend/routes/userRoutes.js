// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/bmw-mercedes-income', userController.getUsersByCarAndIncome);

// Route for getting male users which have phone price greater than 10,000.
router.get('/male-phone-price/', userController.getMaleUsersByPhonePrice);

// Route for getting users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
router.get('/quote-email/', userController.getUsersByLastNameAndQuoteLength);

// Route for getting users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
router.get('/car-brand-email/', userController.getUsersByCarBrandAndEmail);

// Route for getting top 10 cities which have the highest number of users and their average income.
router.get(
  '/top-cities/',
  userController.getTopCitiesWithHighestUserCountAndAverageIncome
);

module.exports = router;
