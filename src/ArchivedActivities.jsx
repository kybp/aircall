import React, { useEffect } from 'react';

import ActivityFeedItem from './ActivityFeedItem.jsx';
import Loading from './Loading.jsx';
import { getActivityFeed, useApi } from './api';

const ArchivedActivities = () => {
  const api = useApi(getActivityFeed);

  useEffect(api.request, []);

  if (api.loading) {
    return <Loading />;
  }

  const activities = (api.data || []).filter((a) => a.is_archived);

  return (
    <div>
      {activities.map((activity) => (
        <ActivityFeedItem key={`activity-${activity.id}`} activity={activity} />
      ))}
    </div>
  );
};

export default ArchivedActivities;
