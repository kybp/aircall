import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

import ActivityDetailTable from './ActivityDetailTable.jsx';
import ActivityIcon from './ActivityIcon.jsx';
import Loading from './Loading.jsx';
import ToggleActivityArchivedButton from './ToggleActivityArchivedButton.jsx';
import { getActivityDetail, useApi } from './api';

const ActivityDetail = () => {
  const { activityId } = useParams();
  const api = useApi(getActivityDetail(activityId));

  useEffect(api.requestEffect, [activityId]);

  if (api.loading) return <Loading />;

  const activity = api.data;

  return (
    activity && (
      <Card className="activity-detail">
        <Card.Body>
          <ActivityDetailTable activity={activity} />
          <ToggleActivityArchivedButton activity={activity} />
        </Card.Body>
      </Card>
    )
  );
};

export default ActivityDetail;
