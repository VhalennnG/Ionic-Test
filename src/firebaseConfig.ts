import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDbqOcPOFo1d0V_W4lTbHqOophQ5IlWCIU",
  authDomain: "ionic-test-fe6b9.firebaseapp.com",
  projectId: "ionic-test-fe6b9",
  storageBucket: "ionic-test-fe6b9.appspot.com",
  messagingSenderId: "359157358727",
  appId: "1:359157358727:web:48aa09370816b9c32f9822",
  measurementId: "G-ZNQC75CVDF",
};

firebase.initializeApp(config);

export async function loginUser(username: string, password: string) {
  // * authenticate with firebase
  // ? if present, show dashboard
  // ? otherwise show error message

  const email = `${username}@codedamn.com`;

  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function registerUser(username: string, password: string) {
  // * authenticate with firebase
  // ? if present, show dashboard
  // ? otherwise show error message

  const email = `${username}@codedamn.com`;

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
