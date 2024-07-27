import React, {useReducer} from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state, dispatch
  } = useApplicationData();
  return (
  <div className="App">
    <HomeRoute photos={state.photoData} topics={state.topicData} state={state} dispatch={dispatch}/>
    {state.modalDisplay && <PhotoDetailsModal state={state} dispatch={dispatch}/>}
  </div>
  );
};
export default App;