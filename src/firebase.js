import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB3jhs32YlU8fIcnQF0Mo3bvBg1YouWTSU",
  authDomain: "first-flight-9c6e5.firebaseapp.com",
  databaseURL: "https://first-flight-9c6e5.firebaseio.com",
  projectId: "first-flight-9c6e5",
  storageBucket: "first-flight-9c6e5.appspot.com",
  messagingSenderId: "667164703085"
};
firebase.initializeApp(config);

export default firebase

export const database = firebase.database()