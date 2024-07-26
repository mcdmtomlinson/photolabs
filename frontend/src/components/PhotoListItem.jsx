import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { data, state, dispatch } = props;

  // Check if props.data is defined
  if (!data) {
    return null;
  }

  // Destructure properties from data with safe default values
  const { id, urls = {}, user = {}, location = {} } = data;
  const { regular } = urls;
  const { profile, username } = user;
  const { city, country } = location;

  // Check if state and state[id] are defined
  const isSelected = state && state[id] !== undefined ? state[id] : false;

  const handleClick = () => {
    const action = {
      type: 'setPhotoSelected',
      payload: {
        modalDisplay: true,
        modalId: id,
      },
    };
    dispatch(action);
  };

  return (
    <li className="photo-list__item" onClick={handleClick}>
      <PhotoFavButton selected={isSelected} dispatch={dispatch} id={id} state={state} />
      {regular && <img className="photo-list__image" src={regular} alt="Photo" />}
      <div className="photo-list__user-details">
        {profile && <img className="photo-list__user-profile" src={profile} alt="User Profile" />}
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">
            {city && <span>{city}</span>}
            {city && country && <span>, </span>}
            {country && <span>{country}</span>}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;