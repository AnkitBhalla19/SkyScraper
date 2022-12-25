import firebase from 'firebase/app'
import 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyD_D9VZINKoytvM48-31-arjnvi1p4wrBo",
  authDomain: "ideathon-auth.firebaseapp.com",
  projectId: "ideathon-auth",
  storageBucket: "ideathon-auth.appspot.com",
  messagingSenderId: "875779015076",
  appId: "1:875779015076:web:d931eabf4c39dac5d14131",
  measurementId: "G-KHWK3DS4W2"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };