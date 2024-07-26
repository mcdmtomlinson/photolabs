import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
       <TopicList />
        <TopNavigation>
        <TopicList />
        <FavBadge />
      </TopNavigation>
      <PhotoList />
      <HomeRoute />
    </div>
  );
};
export default App;