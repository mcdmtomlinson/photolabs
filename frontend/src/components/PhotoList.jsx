import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return(<ul className="photo-list">
   {props.photos.map((photo, index) =>
    <PhotoListItem key={photo.id} data={photo}/>
  )}
  </ul>)
};

export default PhotoList;