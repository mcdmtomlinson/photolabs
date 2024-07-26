import React from 'react';
import PhotoList from './components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topics={props.topics}/>
      </TopNavigation>
      <PhotoList photos={props.photos} />
    </div>
  );
};

export default HomeRoute;