import React from 'react';
import Table from 'react-bootstrap/Table';

const ActivityDetailTable = ({ activity }) => {
  const started = new Date(activity.created_at).toLocaleString();

  return (
    <Table>
      <tbody>
        <tr>
          <th>From</th>
          <td>{activity.from}</td>
        </tr>
        <tr>
          <th>To</th>
          <td>{activity.to}</td>
        </tr>
        <tr>
          <th>Via</th>
          <td>{activity.via}</td>
        </tr>
        <tr>
          <th>Started</th>
          <td>{started}</td>
        </tr>
        <tr>
          <th>Duration</th>
          <td>{activity.duration} seconds</td>
        </tr>
        <tr>
          <th>Direction</th>
          <td>{activity.direction}</td>
        </tr>
        <tr>
          <th>Type</th>
          <td>{activity.call_type}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ActivityDetailTable;
