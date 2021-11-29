/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    apiKey: "AIzaSyDgxaNCHqHhfZHr_CSz24Rkf_jOGCCbkic",
    authDomain: "laravelfcm-98cea.firebaseapp.com",
    projectId: "laravelfcm-98cea",
    storageBucket: "laravelfcm-98cea.appspot.com",
    messagingSenderId: "126612104061",
    appId: "1:126612104061:web:3fbd1c8bc31a471b096214",
    measurementId: "G-SQJ24TPNDG"
});

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );
  /* Customize notification here */
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/itwonders-web-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});
