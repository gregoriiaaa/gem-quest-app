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

  static currUID = () => {
    const currUser = FIREBASE_AUTH.currentUser;
    if (currUser) {
      return currUser.uid;
    } else {
      return null;
    }
  };

  /** static currName = () => {
    const currUser = FIREBASE_AUTH.currentUser;
    if (currUser) {
      return currUser.displayName;
    } else {
      return null;
    }
  }*/

  /**static updateDisplayName = async (newName) => {
    const currUser = FIREBASE_AUTH.currentUser;
    currUser
      .updateProfile({
        displayName: newName,
      })
      .then(() => {
        console.log(currUser.displayName);
      })
      .catch((error) => {
        console.error('Error updating display name:', error.message);
      });
  }*/
}

/** static GetUserData = async(uid) => {
    await getUserById(uid)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
  } */

export default authService;
