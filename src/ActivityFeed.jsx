import React, { useEffect } from 'react';

import ActivityFeedItem from './ActivityFeedItem.jsx';
import Loading from './Loading.jsx';
import { getActivityFeed, useApi } from './api';

const ActivityFeed = () => {
  const api = useApi(getActivityFeed);

  useEffect(api.request, []);

  if (api.loading) {
    return <Loading />;
  }

  return (
    <ul>
      {api.data.map((activity) => (
        <li key={`activity-${activity.id}`}>
          <ActivityFeedItem activity={activity} />
        </li>
      ))}
    </ul>
  );
};

export default ActivityFeed;
