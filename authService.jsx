import { FIREBASE_AUTH } from "./database/FirebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setUserDoc, getUserById } from "./database/userQueries.js";
import User from "./classes/User.js";

class authService {
  static SignUp = async (name, email, password, birthday, pronouns) => {
    await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userObject = new User(
          user.uid,
          name,
          user.email,
          birthday,
          pronouns
        );
        setUserDoc(userObject);
        alert(`User with email ${email} successfuly created!`);
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  static LogIn = async (email, password) => {
    await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        alert(`User with email ${email} successfuly logged in!`);
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
}

export default authService;
