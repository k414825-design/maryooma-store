importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyABbeicQzlfmDEDpTmBavXNnLAkHFT05gE",
    authDomain: "maryooma-store-cf82a.firebaseapp.com",
    databaseURL: "https://maryooma-store-cf82a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "maryooma-store-cf82a",
    storageBucket: "maryooma-store-cf82a.firebasestorage.app",
    messagingSenderId: "72069197600",
    appId: "1:72069197600:web:a9c20a35fc8f6ca2abb145"
});

const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
    console.log('Background message:', payload);
    const { title, body } = payload.notification || {};
    self.registration.showNotification(title || 'Maryooma Store 🌟', {
        body: body || 'لديك تنبيه جديد',
        icon: '/icon.png',
        badge: '/icon.png',
        dir: 'rtl',
        lang: 'ar'
    });
});
