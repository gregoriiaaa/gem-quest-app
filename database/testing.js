import { collection, addDoc } from "firebase/firestore";
import db from "./FirebaseConfig.js";

try {
  const docRef = await addDoc(collection(db, "users"), {
    name: "HELLO WORLD pt2",
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
