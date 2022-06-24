import React from 'react';

import ActivityFeedItem from './ActivityFeedItem.jsx';

const ActivityList = ({ activities }) => {
  return (
    <div>
      {activities.map((activity) => (
        <ActivityFeedItem key={`activity-${activity.id}`} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityList;
