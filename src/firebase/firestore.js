import * as firebase from "firebase";

const config = {
  apiKey: "NOPE",
  authDomain: "cupboard-wrangler-fs.firebaseapp.com",
  databaseURL: "https://cupboard-wrangler-fs.firebaseio.com",
  projectId: "cupboard-wrangler-fs",
  storageBucket: "cupboard-wrangler-fs.appspot.com",
  messagingSenderId: "210138946854",
  appId: "1:210138946854:web:8417cfe88ab1dde08175e7",
  measurementId: "G-C2TVYXBHQK"
};
firestore.initializeApp(config);

const database = firestore.database();
const googleAuthProvider = new firestore.auth.GoogleAuthProvider(); // useless unless Google is checked off in firestore/auth dashboard

export { firestore, googleAuthProvider, database as default };

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyD_-vV5n7MCbb2av2IpFsE8K8STskcLhCg",
//     authDomain: "cupboard-wrangler-fs.firebaseapp.com",
//     databaseURL: "https://cupboard-wrangler-fs.firebaseio.com",
//     projectId: "cupboard-wrangler-fs",
//     storageBucket: "cupboard-wrangler-fs.appspot.com",
//     messagingSenderId: "210138946854",
//     appId: "1:210138946854:web:8417cfe88ab1dde08175e7",
//     measurementId: "G-C2TVYXBHQK"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
