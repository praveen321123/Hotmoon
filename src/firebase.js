import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCUifKAUqwinAssBu5fC2XnNfTX1hb362o",
    authDomain: "hotmoon-49269.firebaseapp.com",
    projectId: "hotmoon-49269",
    storageBucket: "hotmoon-49269.appspot.com",
    messagingSenderId: "573615787160",
    appId: "1:573615787160:web:51d705dce77ddbdcb094ed",
    measurementId: "G-PJVV9SEF7Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()


export { auth, provider, storage };
export default db;