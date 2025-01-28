// استيراد الوظائف اللازمة من Firebase
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// تكوين Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDKRADtZ9fa2pyvXIw5oXFf7ttNFje80A8",
  authDomain: "ahmed-99129.firebaseapp.com",
  databaseURL: "https://ahmed-99129-default-rtdb.firebaseio.com",
  projectId: "ahmed-99129",
  storageBucket: "ahmed-99129.appspot.com",
  messagingSenderId: "113829270298",
  appId: "1:113829270298:web:3971bf1e695b21fa8792a3",
  measurementId: "G-Q8X80L0LSY"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// تهيئة Authentication
const auth = getAuth(app);

// وظيفة تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور
document.getElementById("signInForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 2000);
    })
    .catch((error) => {
      document.getElementById("error").textContent = error.message;
    });
});

// وظيفة تسجيل الدخول باستخدام جوجل
document.getElementById("googleSignInBtn").addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth, provider)
    .then(() => {
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 2000);
    })
    .catch((error) => {
      document.getElementById("error").textContent = error.message;
    });
});
