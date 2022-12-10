import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseApp = 
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
{
    apiKey: "AIzaSyAQZSNXMKhv_8pgsdw2ikIZcid67CeCfQo",
    authDomain: "shop-in-demo.firebaseapp.com",
    projectId: "shop-in-demo",
    storageBucket: "shop-in-demo.appspot.com",
    messagingSenderId: "368933604676",
    appId: "1:368933604676:web:8e9a7ffa738b80f9f41b11",
    measurementId: "G-0SE2J7C8KM"
  }

  const app = initializeApp(firebaseApp)
const auth = getAuth(app)

export {auth};