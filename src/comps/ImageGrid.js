import React from "react";
import UseFirestore from "../Hooks/UseFirestore";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = UseFirestore("gallery");
  console.log(docs);

  const deleteImg=(event,itemId)=>{
  event.stopPropagation()
 console.log('seen');
  const dataToDelete=doc(db,'gallery',itemId)
  const toConfirm = window.confirm('Are you sure you want to delete this image')

  if (toConfirm) {
    deleteDoc(dataToDelete).then(()=>{
    console.log('Data deleted')
    }).catch((err)=>{
    console.log(err.message);
    })
  }
  }

  return (
    <div className="img-grid">
      {docs &&
        docs.map((item) => (
          <motion.div
            className="img-wrap"
            key={item.id}
            layout
            whileHover={{opacity:1}}
            onClick={() => setSelectedImg(item.url)}
          >
          <MdDelete onClick={(e)=>deleteImg(e,item.id)} className="del" color="red" size={30}/>
            <motion.img src={item.url} alt="uploaded pic" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
