import React, {useReducer, useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import FavBadge from 'components/FavBadge';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topics={props.topics}/>
        <FavBadge />
      </TopNavigation>
      <PhotoList photos={props.photos} dispatch={dispatch} state={state}/>
    </div>
  );
};

export default HomeRoute;