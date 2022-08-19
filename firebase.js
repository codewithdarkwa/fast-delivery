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

// import { initializeApp } from "firebase/app"
// import { getFirestore } from 'firebase/firestore'

//  const firebaseConfig = {
//   apiKey: "AIzaSyCEtFbxO0_9NaRKYljESsCcFlX_h0lyyjk",
//   authDomain: "fast-delivery-26899.firebaseapp.com",
//   projectId: "fast-delivery-26899",
//   storageBucket: "fast-delivery-26899.appspot.com",
//   messagingSenderId: "174389002001",
//   appId: "1:174389002001:web:fca8fe7b66ae8bb2ca56b0"
//  };

//  const app = initializeApp(firebaseConfig);
//  export const db = getFirestore(app);
