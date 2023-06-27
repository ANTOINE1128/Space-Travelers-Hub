import React from 'react';
import './styles/Missions.css';

const Mission = () => (
  <div className="missions-container">
    <h1>Missions</h1>
    <table className="missions-table">
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>status</th>
          <th>  </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mission 1</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, enim.</td>
          <td><span className="members">Not a member</span></td>
          <td><button type="button" className="btn-join">join Mission</button></td>
        </tr>
        <tr>
          <td>Mission 2</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quia?</td>
          <td><span className="members">Not a member</span></td>
          <td><button type="button" className="btn-join">join Mission</button></td>
        </tr>
        <tr>
          <td>Mission 3</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptas?</td>
          <td><span className="members">Active Member</span></td>
          <td><button type="button" className="btn-join">Leave Mission</button></td>
        </tr>
        <tr>
          <td>Mission 4</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, hic!</td>
          <td><span className="members">not a member</span></td>
          <td><button type="button" className="btn-join">join Mission</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Mission;
