import React, { useState } from 'react';
import photos from './mocks/photos'; // Adjust the path if necessary
import topics from './mocks/topics'; // Adjust the path if necessary
import HomeRoute from './routes/HomeRoute'; // Adjust the path if necessary
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // Adjust the path if necessary

const App = () => {
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const stateObject = photos.reduce((result, _, index) => {
    result[index + 1] = false;
    return result;
  }, {});

  const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case "FAVOURITE":
        return {...state, [action.id]: action.payload}
      default:
        return state;
    }
  },stateObject);

  const [modalState, modalDispatch ] = useReducer((modalState, action)=>{
    switch(action.type){
      case "DISPLAY":
      return {...modalState, display: action.payload.display, id: action.payload.id};
    }
  },{id: 0, display: false});  
  return (

    <div className="App">
    <HomeRoute 
      photos={photos} 
      topics={topics} 
      setModal={setModal} 
      setSelectedPhoto={setSelectedPhoto} 
      modal={modal} 
    />
    {modal && 
      <PhotoDetailsModal 
        setModal={setModal} 
        singlePhotoDetail={selectedPhoto} 
      />
    }
  </div>
);
};


export default App;