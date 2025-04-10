import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6gGSTeoxwJ2DeYkPylNkM2xD9VHYdy8s",
  authDomain: "werners-eac52.firebaseapp.com",
  projectId: "werners-eac52",
  storageBucket: "werners-eac52.firebasestorage.app",
  messagingSenderId: "694160286145",
  appId: "1:694160286145:web:9cebc0ebf67310df8d8f40",
  measurementId: "G-BDNX7N6EG0"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);