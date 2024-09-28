// // import firebase from "firebase";
// // import "firebase/storage";


// // const firebaseConfig = {
// //     apiKey: "AIzaSyD5mJafzejsuxqIy6LnJiI2WZ_cvXDkIbE",
// //     authDomain: "fbclone-9478c.firebaseapp.com",
// //     projectId: "fbclone-9478c",
// //     storageBucket: "fbclone-9478c.appspot.com",
// //     messagingSenderId: "996700631999",
// //     appId: "1:996700631999:web:20bf3c54493cb809afe70a",
// //     measurementId: "G-4HSNPNV911"
// //   };

// //   const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// //   const db = app.firestore();
// //   const storage = firebase.storage();

// //   export {db, storage};

// // Import necessary Firebase functions from the modular SDK
// import { initializeApp, getApps, getApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD5mJafzejsuxqIy6LnJiI2WZ_cvXDkIbE",
//   authDomain: "fbclone-9478c.firebaseapp.com",
//   projectId: "fbclone-9478c",
//   storageBucket: "fbclone-9478c.appspot.com",
//   messagingSenderId: "996700631999",
//   appId: "1:996700631999:web:20bf3c54493cb809afe70a",
//   measurementId: "G-4HSNPNV911"
// };

// // Initialize Firebase app (check if already initialized to avoid re-initialization)
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// // Initialize Firestore and Storage services
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { db, storage };

// Import the Firebase app and services you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5mJafzejsuxqIy6LnJiI2WZ_cvXDkIbE",
    authDomain: "fbclone-9478c.firebaseapp.com",
    projectId: "fbclone-9478c",
    storageBucket: "fbclone-9478c.appspot.com",
    messagingSenderId: "996700631999",
    appId: "1:996700631999:web:20bf3c54493cb809afe70a",
    measurementId: "G-4HSNPNV911"
};

// Initialize Firebase app (only once to prevent multiple instances)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
