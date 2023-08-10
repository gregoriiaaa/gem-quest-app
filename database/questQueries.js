import db from "./FirebaseConfig.js";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import Quest from "../classes/Quest.js";
import transformFbQuestToJsQuest from "../utils/utils.js";

/** Adds a new user with a firebase auto-generated id to the database.
 *    @note Use this function if you want a new user that doesn't also have authenticated user credentials.
 *
 *    @params user: Javascript Class Object
 *    @returns userObject
 */
async function addNewQuery(user) {
  try {
    if (!user || !(user instanceof User)) {
      throw Error(
        "Invalid user object. User object cannot be null and must be an instance of the User class."
      );
    }

    const userObject = user.toPlainJavaScriptObject();

    const docRef = await addDoc(collection(db, "users"), userObject);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

/** Takes a User Javascript Class Object and overwrites the corresponding Firebase user document
 *  (according to the uid), or creates a new Firebase user document if it doesn't already exist.
 *    @note the given uid is from the user that you passed in (i.e., user.uid)
 *
 *    @params user: Javascript Class Object
 *    @returns void
 */
async function setUserDoc(user) {
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
async function getUserById(uid) {
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

/** Testing below */

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
