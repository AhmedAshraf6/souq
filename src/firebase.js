import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCX7x_vDPiQOv1hOdSaEbsvd81lYb5YzxU',
  authDomain: 'olxapp-project.firebaseapp.com',
  databaseURL: 'https://olxapp-project-default-rtdb.firebaseio.com',
  projectId: 'olxapp-project',
  storageBucket: 'olxapp-project.appspot.com',
  messagingSenderId: '900328011455',
  appId: '1:900328011455:web:d94f1ecc083ea8fd3cb80a',
  measurementId: 'G-LLB6FYBLR7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const realTimedb = getDatabase(app);

const provider = new GoogleAuthProvider();
export { auth, provider, db, storage, realTimedb };
