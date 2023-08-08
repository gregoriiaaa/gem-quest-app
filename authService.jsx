import { FIREBASE_AUTH } from './FirebaseConfig.js';
import { createUserWithEmailAndPassword } from "firebase/auth";


class authService {
    static SignUp = (email, password) => {
        createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.email);
            })
            .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
}

export default authService;