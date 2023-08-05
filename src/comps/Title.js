import React from 'react';
import {MdDarkMode, MdLightMode} from 'react-icons/md'

const Title = ({isLightMode,setIsLightMode}) => {
  return (
    <div className="title">
     <div className='separate'>
      <h1>Gallery</h1>
      <div onClick={()=>setIsLightMode(!isLightMode)}>
      {isLightMode?<MdDarkMode size={35}/>:<MdLightMode size={35}/>}
      </div>
     </div>
      <h2>Your Pictures</h2>
      <p>Keep your picture safe for future use. It's reliable.</p>
    </div>
  )
}

export default Title;