// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (usa tus propias credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyCe9vaDjc9MrbBdOEw4gnwsXtjs51woxdQ",
  authDomain: "aplicaciones-web-4eda7.firebaseapp.com",
  projectId: "aplicaciones-web-4eda7",
  storageBucket: "aplicaciones-web-4eda7.firebasestorage.app",
  messagingSenderId: "243803012397",
  appId: "1:243803012397:web:edd9eb79f3a8609519a7a4",
  measurementId: "G-BDK0HH6M8Z",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
export const db = getFirestore(app);

// Opcional: Inicializa Analytics solo si el entorno lo permite
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    getAnalytics(app);
  }).catch((error) => {
    console.warn("Firebase Analytics no está disponible en este entorno:", error);
  });
}
