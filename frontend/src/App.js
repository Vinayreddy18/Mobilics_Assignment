import React, { useState } from 'react';
import axios from 'axios';
import config from './config';
import './App.css';
import TableRow from './TableRow';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [showTable, setShowTable] = useState(false); // state to control table display
  const [flag, setFlag] = useState(false); // state to control table display
  const fields = [
    'id',
    'first_name',
    'last_name',
    'email',
    'gender',
    'car',
    'phone_price',
    'quote',
    'income',
    'city',
  ]; // fields for table data
  const temp = ['city', 'count', 'avg_income'];
  const handleGetUsersByCarAndIncome = async () => {
    try {
      const res = await axios.get(
        `${config.BACKEND_URL}/users/bmw-mercedes-income`
      );
      setUserData(res.data);

      setShowTable(true); // show table after data is received
      setFlag(false);
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGetMaleUsersByPhonePrice = async () => {
    try {
      const res = await axios.get(
        `${config.BACKEND_URL}/users/male-phone-price`
      );
      setShowTable(true);
      setFlag(false);
      setUserData(res.data);
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGetUsersByLastNameAndQuoteLength = async () => {
    try {
      const res = await axios.get(`${config.BACKEND_URL}/users/quote-email`);
      setShowTable(true);
      setFlag(false);
      setUserData(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGetUsersByCarBrandAndEmail = async () => {
    try {
      const res = await axios.get(
        `${config.BACKEND_URL}/users/car-brand-email`
      );
      setShowTable(true);
      setFlag(false);
      setUserData(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGetTopCitiesWithHighestUserCountAndAverageIncome = async () => {
    try {
      const res = await axios.get(`${config.BACKEND_URL}/users/top-cities`);
      setFlag(true);
      setShowTable(false);
      setUserData(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>
        <center>User Data Table</center>
        <a
          href="https://vinay-portifolio.netlify.app"
          target="_blank"
          style={{ color: 'red' }}
          rel="noopener noreferrer"
        >
          Check out my portfolio
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <button onClick={handleGetUsersByCarAndIncome}>
              Get Users by Car and Income
            </button>
          </li>
          <li>
            <button onClick={handleGetMaleUsersByPhonePrice}>
              Get Male Users by Phone Price
            </button>
          </li>
          <li>
            <button onClick={handleGetUsersByLastNameAndQuoteLength}>
              Get Users by Last Name and Quote Length
            </button>
          </li>
          <li>
            <button onClick={handleGetUsersByCarBrandAndEmail}>
              Get Users by Car Brand and Email
            </button>
          </li>
          <li>
            <button
              onClick={handleGetTopCitiesWithHighestUserCountAndAverageIncome}
            >
              Get Top Cities with Highest User Count and Average Income
            </button>
          </li>
          {/* Add similar buttons for other functions */}
        </ul>
      </nav>
      {error && <p>{error}</p>}
      {/* Render table only when showTable is true */}
      {showTable && (
        <table>
          <thead>
            <tr>
              {fields.map((field) => (
                <th key={field}>{field.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <TableRow
                key={user.id}
                user={user}
                fields={fields}
                isTopCities={
                  handleGetTopCitiesWithHighestUserCountAndAverageIncome ===
                  true
                }
              />
            ))}
          </tbody>
        </table>
      )}
      {flag && (
        <table>
          <thead>
            <tr>
              <th>CITY</th>
              <th>COUNT</th>
              <th>AVG_INCOME</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <TableRow
                key={user.id}
                user={user}
                fields={temp}
                isTopCities={
                  handleGetTopCitiesWithHighestUserCountAndAverageIncome ===
                  true
                }
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
