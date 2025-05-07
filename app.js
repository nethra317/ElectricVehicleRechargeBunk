// // Import Firebase SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD8b8awq7RXSV4KkBsTul856aQTzESC_Zk",
//     authDomain: "electricvehiclerecharge.firebaseapp.com",
//     projectId: "electricvehiclerecharge",
//     storageBucket: "electricvehiclerecharge.appspot.com",
//     messagingSenderId: "494229055966",
//     appId: "1:494229055966:web:75fa186726933d8b5bd54f",
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Registration
// document.getElementById('register-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const email = document.getElementById('register-email').value;
//     const password = document.getElementById('register-password').value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             console.log('Registered:', userCredential.user);
//             window.location.href = '#login';
//         })
//         .catch((error) => {
//             console.error('Error:', error.message);
//         });
// });

// // Login
// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             console.log('Logged in:', userCredential.user);
//             window.location.href = 'home.html';
//         })
//         .catch((error) => {
//             console.error('Error:', error.message);
//         });
// });

// // Initialize and add the map
// function initMap() {
//     const center = { lat: -34.397, lng: 150.644 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 8,
//         center: center,
//     });
//     const marker = new google.maps.Marker({
//         position: center,
//         map: map,
//     });
// }

// // Load the map when the window loads
// window.onload = initMap;



// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Firebase configuration (keep it in config.js if needed)
const firebaseConfig = {
    apiKey: "AIzaSyD8b8awq7RXSV4KkBsTul856aQTzESC_Zk",
    authDomain: "electricvehiclerecharge.firebaseapp.com",
    projectId: "electricvehiclerecharge",
    storageBucket: "electricvehiclerecharge.appspot.com",
    messagingSenderId: "494229055966",
    appId: "1:494229055966:web:75fa186726933d8b5bd54f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Save user details to Firestore
            console.log('User registered:', userCredential.user);
            window.location.href = '#login';
        })
        .catch((error) => {
            console.error('Error during registration:', error.message);
        });
});

// Login (Login Form)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
            window.location.href = 'home.html';
        })
        .catch((error) => {
            console.error('Error during login:', error.message);
        });
});


//firebase save data
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const db1 = getFirestore(app);

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Save user data to Firestore
            return addDoc(collection(db1, "users"), {
                uid: userCredential.user.uid,
                email: email,
            });
        })
        .then(() => {
            console.log('User registered and data saved to Firestore');
            window.location.href = '#login';
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
});
