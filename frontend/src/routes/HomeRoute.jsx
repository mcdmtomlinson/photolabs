import React, {useReducer} from 'react';
import PhotoList from './components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import FavBadge from 'components/FavBadge';
import photos from 'mocks/photos';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const isFavPhotoExist = Object.values(props.state).includes(true);
  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topics={props.topics}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      </TopNavigation>
      <PhotoList photos={props.photos} dispatch={props.dispatch} state={props.state} />
    </div>
  );
};

export default HomeRoute;