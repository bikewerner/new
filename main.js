import { messaging } from './firebase-init.js';

const subscribeButton = document.createElement('button');
subscribeButton.innerText = "🔔 Push aktivieren";
subscribeButton.style.position = 'fixed';
subscribeButton.style.bottom = '20px';
subscribeButton.style.right = '20px';
subscribeButton.style.zIndex = 9999;
subscribeButton.style.padding = '10px 15px';
subscribeButton.style.background = '#2c2';
subscribeButton.style.color = 'white';
subscribeButton.style.border = 'none';
subscribeButton.style.borderRadius = '8px';
subscribeButton.style.cursor = 'pointer';
document.body.appendChild(subscribeButton);

subscribeButton.addEventListener("click", async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, { vapidKey: 'BIH8IEK0dZqGrmrM97ohlDlPCjUqMVR4lnkdBPpB7K2yvU0Hc_4xGwuVMkZABMAz8bW0cx7arozLHzbzR4xxkjY' });
      console.log("📲 FCM Token:", token);
      alert("Push aktiviert! Token in der Konsole.");
    } else {
      console.error("❌ Benachrichtigung nicht erlaubt.");
    }
  } catch (err) {
    console.error("❌ Fehler beim Abrufen des Tokens:", err);
  }
});

onMessage(messaging, payload => {
  console.log("🔔 Nachricht empfangen:", payload);
  const { title, body } = payload.notification;
  new Notification(title, { body });
});