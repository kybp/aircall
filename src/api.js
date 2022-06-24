import { useState, useContext } from 'react';

import { NotificationsContext } from './notifications';

const baseUrl = 'https://aircall-job.herokuapp.com';

const apiUrl = (path) => `${baseUrl}/${path}`;

const apiGet = (path) => fetch(apiUrl(path));

const apiPost = (path, data) =>
  fetch(apiUrl(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const getActivityFeed = () => apiGet('activities');

export const getActivityDetail = (id) => () => apiGet(`activities/${id}`);

export const updateActivity = (id, params) => () =>
  apiPost(`activities/${id}`, params);

export const useApi = (apiFunc, { initiallyLoading = true } = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(initiallyLoading);
  const notify = useContext(NotificationsContext);

  const request = async (...args) => {
    setLoading(true);

    try {
      const response = await apiFunc(...args);
      setData(await response.json());
    } catch (err) {
      notify.error(err.message || 'An error has occurred.');
    } finally {
      setLoading(false);
    }
  };

  const requestEffect = (...args) => {
    request(...args);
  };

  return { data, loading, request, requestEffect };
};
