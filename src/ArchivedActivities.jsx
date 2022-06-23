import React, { useEffect } from 'react';

import ActivityFeedItem from './ActivityFeedItem.jsx';
import Loading from './Loading.jsx';
import { getArchivedActivities, useApi } from './api';

const ArchivedActivities = () => {
  const api = useApi(getArchivedActivities);

  useEffect(api.request, []);

  if (api.loading) {
    return <Loading />;
  }

  return (
    <div>
      {api.data.map((activity) => (
        <ActivityFeedItem key={`activity-${activity.id}`} activity={activity} />
      ))}
    </div>
  );
};

export default ArchivedActivities;
