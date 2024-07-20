import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.tsx';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { apiKey, appId, authDomain, measurementId, messagingSenderId, projectId, storageBucket } from './../env';

const firebaseConfig = {

  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};
const app  = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const signIn = async () => {
  try {
    await signInAnonymously(auth);
    console.log('Signed in anonymously');
  } catch (error) {
    console.error('Error signing in anonymously', error);
  }
};

export { db, auth, signIn };
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
