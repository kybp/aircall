import React from 'react';

import ActivityFeedItem from './ActivityFeedItem.jsx';

const DateDivider = ({ date }) => {
  return <div className="separator">{date}</div>;
};

const insertDateDividers = (activities) => {
  const byDate = {};

  activities.forEach((activity) => {
    const date = new Date(activity.created_at);
    const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    byDate[dateString] = (byDate[dateString] || []).concat([activity]);
  });

  const makeElementArrayForDate = (date) => {
    const activities = byDate[date];

    return [
      <DateDivider key={`date-${date}`} date={date} />,
      ...activities.map((activity) => (
        <ActivityFeedItem key={`activity-${activity.id}`} activity={activity} />
      )),
    ];
  };

  return Object.keys(byDate)
    .sort((a, b) => b.localeCompare(a))
    .map(makeElementArrayForDate)
    .reduce((acc, x) => acc.concat(x), []);
};

const ActivityList = ({ activities }) => {
  return <div>{insertDateDividers(activities)}</div>;
};

export default ActivityList;
