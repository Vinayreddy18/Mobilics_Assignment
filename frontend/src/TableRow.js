import React from 'react';

const TableRow = ({ user, fields, isTopCities }) => {
  return (
    <tr>
      {fields.map((field) => (
        <td key={field}>{user[field]}</td>
      ))}
      {user.count && user.avg && (
        <>
          <td>{user.count}</td>
          <td>{user.avg_income}</td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
