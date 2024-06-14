import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";//es valido para cualquier tipo de servicio de firebase

import {firebaseConfig} from "./credenciales.js";

// Initialize Firebase

const app = initializeApp(firebaseConfig);//aqui se inicializa el servicio de firebase
export const db = getFirestore(app);//esto se importa dentro del archivo de firebase

