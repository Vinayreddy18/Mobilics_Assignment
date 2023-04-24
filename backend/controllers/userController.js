const User = require('../models/user');

const getUsersByCarAndIncome = async (req, res) => {
  console.log('here im');
  try {
    const users = await User.find({
      car: { $in: ['BMW', 'Mercedes-Benz'] },
      income: { $lt: 5 },
    });

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getMaleUsersByPhonePrice = async (req, res) => {
  console.log('hiiiiii');
  try {
    const users = await User.find({
      gender: 'Male',
      phone_price: { $gt: 10000 },
    });

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getUsersByLastNameAndQuoteLength = async (req, res) => {
  try {
    const users = await User.find({
      last_name: /^M/,
      quote: { $regex: /^.{16,}$/ },
      email: { $regex: /.*M.*$/i },
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const getUsersByCarBrandAndEmail = async (req, res) => {
  try {
    const users = await User.find({
      car: { $in: ['BMW', 'Mercedes', 'Audi'] },
      email: { $not: /\d/ },
    }).lean();

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getTopCitiesWithHighestUserCountAndAverageIncome = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $addFields: {
          incomeWithoutDollar: {
            $toDouble: {
              $substr: ['$income', 1, { $strLenCP: '$income' }],
            },
          },
        },
      },
      {
        $group: {
          _id: '$city',
          count: { $sum: 1 },
          total_income: { $sum: '$incomeWithoutDollar' },
        },
      },
      {
        $project: {
          _id: 0,
          city: '$_id',
          count: 1,
          avg_income: { $divide: ['$total_income', '$count'] },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $limit: 10,
      },
    ]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getUsersByCarAndIncome,
  getMaleUsersByPhonePrice,
  getUsersByLastNameAndQuoteLength,
  getUsersByCarBrandAndEmail,
  getTopCitiesWithHighestUserCountAndAverageIncome,
};
