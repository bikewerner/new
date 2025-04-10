importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD6gGSTeoxwJ2DeYkPylNkM2xD9VHYdy8s",
  authDomain: "werners-eac52.firebaseapp.com",
  projectId: "werners-eac52",
  storageBucket: "werners-eac52.firebasestorage.app",
  messagingSenderId: "694160286145",
  appId: "1:694160286145:web:9cebc0ebf67310df8d8f40"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Hintergrundnachricht empfangen:', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/icon.png'
  });
});