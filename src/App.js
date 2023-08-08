import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
// import './light-mode.css'
import './dark-mode.css'

function App() {
const [selectedImg, setSelectedImg] = useState(null)
const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className={!isLightMode&&'dark-mode'}>
     <div className="cover">
      <Title isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
     </div>
    </div>
  );
}

export default App;
