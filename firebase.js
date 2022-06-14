// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6nd9w35NIGBklkO146dh9vS3GozXJSVE",
  authDomain: "skilledmigrationapp.firebaseapp.com",
  projectId: "skilledmigrationapp",
  storageBucket: "skilledmigrationapp.appspot.com",
  messagingSenderId: "566161233854",
  appId: "1:566161233854:web:e21444c6be046cded10bef"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}
const auth  = firebase.auth()
export { auth };
