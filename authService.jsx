import { FIREBASE_AUTH } from "./database/FirebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setUserDoc, getUserById } from "./database/userQueries.js";
import User from "./classes/User.js";

class authService {
  static SignUp = async (name, email, password, birthday, pronouns) => {
    let isSuccess = false;
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
        isSuccess = true;
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    // TODO: ADD QUERY TO ADD USER GOALS AND POINTS HERE
    if (isSuccess) {
      return { isSuccess: isSuccess };
    }
  };

  static LogIn = async (email, password) => {
    let isSuccess = false;
    await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        isSuccess = true;
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    if (isSuccess) {
      return { isSuccess: isSuccess };
    }
  };
}

export default authService;
