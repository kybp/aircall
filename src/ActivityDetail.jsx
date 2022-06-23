import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';

import ActivityIcon from './ActivityIcon.jsx';
import Loading from './Loading.jsx';
import { getActivityDetail, useApi } from './api';

const ActivityDetail = () => {
  const { activityId } = useParams();
  const api = useApi(getActivityDetail(activityId));

  useEffect(api.request, [activityId]);

  if (api.loading) {
    return <Loading />;
  }

  const activity = api.data;

  const started = new Date(activity.created_at).toLocaleTimeString();
  const endedDate = new Date(activity.created_at);
  endedDate.setSeconds(endedDate.getSeconds() + +activity.duration);
  const ended = endedDate.toLocaleTimeString();

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
          <th>Ended</th>
          <td>{ended}</td>
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

export default ActivityDetail;
