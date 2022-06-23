import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

  return <span>Detail for activity {activity.id}</span>;
};

export default ActivityDetail;
