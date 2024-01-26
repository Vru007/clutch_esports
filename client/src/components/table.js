import React from 'react';
import './table.css'; // Create a separate CSS file for styling

export default function Table(){
  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Time</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Smoke</td>
            <td>Clear Swift</td>
            <td>8:00-9:00 pm</td>
            <td>Smoke</td>
          </tr>
          <tr>
            <td>Ostrich</td>
            <td>Exile</td>
            <td>9:00-10:00 pm</td>
            <td>Exile</td>
          </tr>
          <tr>
            <td>JVH</td>
            <td>Red Giants</td>
            <td>10:00-11:00 pm</td>
            <td>JVH</td>
          </tr>
          <tr>
            <td>Ostrich</td>
            <td>JVH</td>
            <td>11:00-12:00 am</td>
            <td>Red Giants</td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
};

