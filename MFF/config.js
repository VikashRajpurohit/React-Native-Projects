import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDXtC0y-TbGrwLqH8CDyePQAXagwbxBHwk',
  authDomain: 'qrapp-42342.firebaseapp.com',
  projectId: 'qrapp-42342',
  storageBucket: 'qrapp-42342.appspot.com',
  messagingSenderId: '639409325525',
  appId: '1:639409325525:web:4331bf4f5248fb3029e95c',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
