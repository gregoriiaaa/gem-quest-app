import { FIREBASE_AUTH } from './database/FirebaseConfig.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {setUserDoc, getUserById} from "./database/userQueries.js";
import User from "./classes/User.js";

class authService {
    static SignUp = (name, email, password, birthday, pronouns) => {
        createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            const userObject = new User(user.uid, name, user.email, birthday, pronouns);
            setUserDoc(userObject);
            })
            .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    static LogIn = (email, password) => {
        signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
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