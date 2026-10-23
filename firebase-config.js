// Lending Ledger settings. Fill in the four parts below, then upload this file
// next to index.html. (These Firebase keys are safe to be public: your data is
// protected by the security rules, not by keeping these values secret.)

window.LEDGER_CONFIG = {

  // 1) Paste the values from Firebase console > Project settings > Your apps > SDK setup and configuration > Config
  firebase: {
    apiKey: "AIzaSyCPhMkQmZRotqe-xQDkAEdEkkFjI3RQ8sg",
    authDomain: "personal-finances-f6045.firebaseapp.com",
    projectId: "personal-finances-f6045",
    storageBucket: "personal-finances-f6045.firebasestorage.app",
    messagingSenderId: "511771293687",
    appId: "1:511771293687:web:afb8d06215a99eb7f560f2"
  },

  // 2) YOUR email (the admin). Use the Google account you'll sign in with, all lowercase.
  //    It must be exactly the same as the email in the Firestore rules.
  adminEmail: "islammojahidul4@gmail.com",

  // 3) Your name, as friends will see it ("Mojahid's ledger", "You owe Mojahid ...")
  ownerName: "Mojahidul",

  // 4) Optional: an email address to get an alert each time someone requests access.
  //    Leave it as "" to turn alerts off (you'll still see requests on your admin page).
  notifyEmail: ""
};
