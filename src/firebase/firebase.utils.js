import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC_XzJZPO2GQnmkz0AqnHrAGXMw6dX5YtU",
    authDomain: "purim-af1a0.firebaseapp.com",
    projectId: "purim-af1a0",
    storageBucket: "purim-af1a0.appspot.com",
    messagingSenderId: "666527333608",
    appId: "1:666527333608:web:fc47ba95945f80eb5e5d5d",
    measurementId: "G-P4BSDS11TC"
  };




  firebase.initializeApp(config)


export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
