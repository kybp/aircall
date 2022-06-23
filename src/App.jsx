import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import ActivityDetail from './ActivityDetail.jsx';
import ActivityFeed from './ActivityFeed.jsx';
import Layout from './Layout.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/activities" />} />
          <Route path="/activities">
            <Route index element={<ActivityFeed />} />
            <Route path=":activityId" element={<ActivityDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;
