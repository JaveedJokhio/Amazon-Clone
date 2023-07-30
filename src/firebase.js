// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmPkQY39tsp1sLGzJSMWwqTy_Km1RTQ9w",
    authDomain: "clone-304f6.firebaseapp.com",
    projectId: "clone-304f6",
    storageBucket: "clone-304f6.appspot.com",
    messagingSenderId: "950260020763",
    appId: "1:950260020763:web:7e6ce896a484e9d4bbaabe",
    measurementId: "G-EHFSE8CDX7"
  };  

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  
  export { db, auth ,provider};