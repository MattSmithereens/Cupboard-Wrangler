import * as firebase from 'firebase';

const config = {
  apiKey: NOPE,
  authDomain: "cupboard-wrangler.firebaseapp.com",
  databaseURL: "https://cupboard-wrangler.firebaseio.com",
  projectId: "cupboard-wrangler",
  storageBucket: "cupboard-wrangler.appspot.com",
  messagingSenderId: "315154339220"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); // useless unless Google is checked off in firebase/auth dashboard

export { firebase, googleAuthProvider, database as default };


// database.ref()
//   .once('value')    // use .on() to subscribe
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error', e);
//   });

// database.ref().set({                  // set (ie, write) values to DB
//   name: 'Matt',
//   age: 44,
//   isBro: true,
//   location: {
//     city: 'portland',
//     country: 'USA'
//   },
//   anotherThing: 'yes',
// }).then(() => {                         // promise
//   console.log('data saved!')
// }).catch((e) => {
//   console.log('this failed', e);
// });

// database.ref('anotherThing')
//   .remove()
//   .then(() => {
//     console.log('item deleted!');
//   }).catch((e) => {
//     console.log('nope', e);
//   });