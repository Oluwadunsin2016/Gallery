import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBOzM34-HFOJLYsbps6LXOn-vmdpU3rt_Q",
  authDomain: "firegram-36827.firebaseapp.com",
  projectId: "firegram-36827",
  storageBucket: "firegram-36827.appspot.com",
  messagingSenderId: "268891081081",
  appId: "1:268891081081:web:43e6fa9a6d65ca644d07a8"
};

const app = initializeApp(firebaseConfig);
export const storage= getStorage(app);
export const db = getFirestore(app);
