import React, { useEffect } from 'react'
import UseStorage from '../Hooks/UseStorage';
import { motion } from "framer-motion";

const ProgressBar = ({file, setFile}) => {
const {url, progress}= UseStorage(file)

useEffect(() => {
if (url) {
  setFile(null)
}
}, [url, setFile])


console.log(progress, url);
  return (
   <div className="back"> <motion.div className='progress' initial={{width: 0}} animate={{width: progress + '%'}}><span>{progress+'%'}</span></motion.div></div>
  )
}

export default ProgressBar