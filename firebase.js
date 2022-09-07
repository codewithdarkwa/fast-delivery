import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAqkLdEfOLKKdWo7n6ggbkov8T5Z8Fb_Zo",
  authDomain: "food-delivery-8441a.firebaseapp.com",
  projectId: "food-delivery-8441a",
  storageBucket: "food-delivery-8441a.appspot.com",
  messagingSenderId: "399100943607",
  appId: "1:399100943607:web:4018d6e58a002d219687f2"
};

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()


  export default firebase;
