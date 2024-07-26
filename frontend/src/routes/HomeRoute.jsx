import React from 'react';

import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
       <TopNavigation>
        <TopicList />
        <FavBadge />
      </TopNavigation>
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
