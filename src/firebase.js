import firebase from 'firebase/app'
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCN8OVf_VKiYEPl3rXQLmnxNbGWpsXQ7dA",
  authDomain: "testing-234c6.firebaseapp.com",
  databaseURL: "https://testing-234c6.firebaseio.com",
  projectId: "testing-234c6",
  storageBucket: "testing-234c6.appspot.com",
  messagingSenderId: "16260793124",
  appId: "1:16260793124:web:be387a6f349ee7478829b1",
  measurementId: "G-BMQM4059SR"
};



firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage,firebase as default};