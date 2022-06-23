import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';

import ActivityDetailTable from './ActivityDetailTable.jsx';
import ActivityIcon from './ActivityIcon.jsx';
import Loading from './Loading.jsx';
import ToggleActivityArchivedButton from './ToggleActivityArchivedButton.jsx';
import { getActivityDetail, useApi } from './api';

const ActivityDetail = () => {
  const { activityId } = useParams();
  const api = useApi(getActivityDetail(activityId));

  useEffect(api.request, [activityId]);

  if (api.loading) {
    return <Loading />;
  }

  const activity = api.data;

  return (
    <div className="activity-detail">
      <ActivityDetailTable activity={activity} />
      <ToggleActivityArchivedButton activity={activity} />
    </div>
  );
};

export default ActivityDetail;
