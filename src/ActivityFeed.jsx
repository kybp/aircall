import React, { useEffect } from 'react';

import ActivityList from './ActivityList.jsx';
import Loading from './Loading.jsx';
import { getActivityFeed, useApi } from './api';

const ActivityFeed = () => {
  const api = useApi(getActivityFeed);

  useEffect(api.requestEffect, []);

  if (api.loading) return <Loading />;

  const activities = (api.data || []).filter((a) => !a.is_archived);

  return <ActivityList activities={activities} />;
};

export default ActivityFeed;
