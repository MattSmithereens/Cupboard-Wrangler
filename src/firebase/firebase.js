import * as firebase from 'firebase';
import API_KEY from '../config';

const config = {
  apiKey: API_KEY,
  authDomain: "cupboard-wrangler.firebaseapp.com",
  databaseURL: "https://cupboard-wrangler.firebaseio.com",
  projectId: "cupboard-wrangler",
  storageBucket: "cupboard-wrangler.appspot.com",
  messagingSenderId: "315154339220"
};

firebase.initializeApp(config);

const database = firebase.database();

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
database.ref('anotherThing')
  .remove()
  .then(() => {
    console.log('item deleted!');
  }).catch((e) => {
    console.log('nope', e);
  });