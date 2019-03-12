import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBKKGzEcY_ZiVih6SjySzw0zSOBUKcHdAw",
  authDomain: "cupboard-wrangler.firebaseapp.com",
  databaseURL: "https://cupboard-wrangler.firebaseio.com",
  projectId: "cupboard-wrangler",
  storageBucket: "cupboard-wrangler.appspot.com",
  messagingSenderId: "315154339220"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Matt'
});