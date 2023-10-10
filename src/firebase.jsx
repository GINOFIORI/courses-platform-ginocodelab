import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

//inicializar firebase
const app = initializeApp(firebaseConfig);

//inicializar Firebase Authentication y obtener una referencia al servicio
export const auth = getAuth(app);
export default app;
