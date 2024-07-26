import React from 'react';
import PhotoListItem from '../components/PhotoListItem'; // Adjust the path if necessary

const HomeRoute = ({ photos, topics, setModal, setSelectedPhoto, modal }) => {
  return (
    <div className="home-route">
      {/* Render photos */}
      <ul>
        {photos.map((photo) => (
          <PhotoListItem 
            key={photo.id} 
            data={photo} 
            state={{}} // Pass the appropriate state here
            dispatch={() => {}} // Pass the appropriate dispatch function here
            setSelectedPhoto={setSelectedPhoto}
            setModal={setModal}
          />
        ))}
      </ul>
      {/* Render topics */}
      {/* ... */}
    </div>
  );
};

export default HomeRoute;