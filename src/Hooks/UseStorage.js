import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage, db } from "../firebase";

const UseStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const colRef = collection(db, "gallery");

    uploadTask.on(
      "state_changed",
      (snap) => {
        let percentage = Math.round(
          (snap.bytesTransferred / snap.totalBytes) * 100
        );
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setUrl(downloadUrl);
          addDoc(colRef, { url:downloadUrl, createdAt: serverTimestamp() })
            .then(() => console.log("Data added"))
            .catch((err) => console.log(err.message));
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default UseStorage;
