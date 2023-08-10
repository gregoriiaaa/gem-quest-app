import db from "./FirebaseConfig.js";
import { setDoc, doc, getDoc } from "firebase/firestore";
import User from "../classes/User.js";
import { transformFbUserToJsUser } from "../utils/utils.js";

/** Takes a User Javascript Class Object and overwrites the corresponding Firebase user document
 *  (according to the uid), or creates a new Firebase user document if it doesn't already exist.
 *    @note the given uid is from the user that you passed in (i.e., user.uid)
 *
 *    @params user: Javascript Class Object
 *    @returns void
 */
export async function setUserDoc(user) {
  try {
    if (!user || !(user instanceof User)) {
      throw Error(
        "Invalid user object. User object cannot be null and must be an instance of the User class."
      );
    }

    const userObject = user.toPlainJavaScriptObject();

    await setDoc(doc(db, "users", user.uid), userObject);
  } catch (e) {
    console.error("Error setting (adding) document: ", e);
  }
}

/** Gets a user from the Firebase with the given uid and returns a User JavaScript Class Object.
 *
 *    @params uid: string
 *    @returns user: User
 */
export async function getUserById(uid) {
  try {
    if (!uid || typeof uid !== "string") {
      throw Error("Invalid user id. User id must be a non-empty string.");
    }

    const userDocSnap = await getDoc(doc(db, "users", uid));

    if (userDocSnap.exists()) {
      const userGotten = userDocSnap.data();
      console.log({ userGotten: userGotten });
      return transformFbUserToJsUser(uid, userGotten);
    } else {
      throw Error("No such document!");
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}

/** You can ignore the code below; it was just me testing the functions above */

// const user = new User(
//   "69",
//   "Testing set doc for adding a new user",
//   "test@berkeley.edu",
//   "12/18/1999",
//   "they/them"
// );
// console.log(user);

// await setUserDoc(user);

// getUserById("123456789").then((result) => console.log(result));
