import { useEffect, useState } from "react";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const UseFirestore = (colName) => {
  const [docs, setDocs] = useState([]);
  const colRef = collection(db, colName);

  const dateQuery = query(colRef, orderBy("createdAt", "desc"));

  
 
  useEffect(() => {
    onSnapshot(dateQuery, (snap) => {
      let documents = [];
      snap.docs.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      console.log(documents);
      return setDocs(documents);
    });
  }, [colName]);

  return { docs };
};

export default UseFirestore;
