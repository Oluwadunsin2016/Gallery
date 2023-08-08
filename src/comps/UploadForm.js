import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import { MdAddCircle } from 'react-icons/md';
import { IoAddCircleOutline } from 'react-icons/io5';

const UploadForm = () => {
const [file, setFile] = useState(null);
const [error, setError] = useState(null)

const types=['image/jpeg', 'image/png']

const changeHandler=(e)=>{
let selected= e.target.files[0]
if (selected && types.includes(selected.type)) {
    setFile(selected);
    setError('');
}else{
    setFile(null);
setError('Please select an image file (png or jpeg)')
}
}

  return (
    <form>
    <input type="file" id='fileInput' onChange={changeHandler} />
    <MdAddCircle className='circlePlus' size={40} onClick={() =>
                        document.getElementById("fileInput").click()
                      }/>
    <div className="output">
    {error && <div className="error">{error}</div> }
    {file && <div>{file.name}</div> }
    {file && <ProgressBar file={file} setFile={setFile} /> }
    </div>
    </form>
  )
}

export default UploadForm