import React, { useEffect } from "react";
import firebase from "firebase";
import Header from "../Components/Common/Header";
import LoginForm from "../Components/LoginForm";

export default function LoginScreen() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAGDf_21DgJ7svoXxyA13vcAJvie_3O0Nc",
      authDomain: "automation-780bc.firebaseapp.com",
      databaseURL: "https://automation-780bc.firebaseio.com",
      projectId: "automation-780bc",
      storageBucket: "automation-780bc.appspot.com",
      messagingSenderId: "622503231725",
      appId: "1:622503231725:web:23d29c5974b5128e2e8ce4",
      measurementId: "G-V3J8Q4PK57",
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  });
  return (
    <div>
      <Header headerTitle="Login" backIcon to="/WelcomeScreen" />
      <LoginForm />
    </div>
  );
}
