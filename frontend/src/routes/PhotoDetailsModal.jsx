import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log(props.singlePhotoDetail); // Updated prop name
  const handleClick = () => {
    props.setModal(prevModal => !prevModal);
  };
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Render photo details here */}
      {props.singlePhotoDetail && (
        <div>
          <img src={props.singlePhotoDetail.urls.regular} alt={props.singlePhotoDetail.description} />
          <p>{props.singlePhotoDetail.user.username}</p>
          <p>{props.singlePhotoDetail.location.city}, {props.singlePhotoDetail.location.country}</p>
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;