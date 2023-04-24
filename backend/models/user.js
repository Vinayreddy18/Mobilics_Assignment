const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    ip_address: { type: String },
    car: { type: String },
    phone_price: { type: String },
    income: { type: String },
    quote: { type: String },
    city: { type: String },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
