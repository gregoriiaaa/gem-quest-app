import db from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

async function addNewUser(user) {
  try {
    //#region Data validation checks
    if (!user || typeof user !== "object") {
      throw new Error("Invalid user data. User must be an object.");
    }

    if (!user.name || typeof user.name !== "string") {
      throw new Error("Invalid name. Name must be a non-empty string.");
    }

    if (!user.email || typeof user.email !== "string") {
      throw new Error("Invalid email. Email must be a non-empty string.");
    }

    // TODO: add regex to pattern match
    if (!user.dateOfBirth || typeof user.dateOfBirth !== "string") {
      throw new Error(
        "Invalid date of birth. Date of birth must be a non-empty string."
      );
    }

    if (!user.pronouns || typeof user.pronouns !== "string") {
      throw new Error("Invalid pronouns. Pronouns must be a non-empty string.");
    }

    if (user.ethnicId === null || typeof user.ethnicId !== "string") {
      throw new Error(
        "Invalid ethnic id. Ethnic id cannot be null and must be a string."
      );
    }

    if (user.genderId === null || typeof user.genderId !== "string") {
      throw new Error(
        "Invalid gender id. Gender id cannot be null and must be a string."
      );
    }

    if (
      user.petsDescription === null ||
      typeof user.petsDescription !== "string"
    ) {
      throw new Error(
        "Invalid pets description. Pets description cannot be null and must be a string."
      );
    }

    if (
      user.personalityType === null ||
      typeof user.personalityType !== "string"
    ) {
      throw new Error(
        "Invalid personality type. Personality type cannot be null and must be a string."
      );
    }

    if (user.coffeeTeaBoba === null || typeof user.coffeeTeaBoba !== "string") {
      throw new Error(
        "Invalid coffee tea boba. Coffee tea boba cannot be null and must be a string."
      );
    }

    if (
      user.dietaryRestrictions === null ||
      typeof user.dietaryRestrictions !== "string"
    ) {
      throw new Error(
        "Invalid dietary restrictions. Dietary restrictions cannot be null and must be a string."
      );
    }

    if (user.comfortFood === null || typeof user.comfortFood !== "string") {
      throw new Error(
        "Invalid comfort food. Comfort food cannot be null and must be a string."
      );
    }

    if (user.topMovie === null || typeof user.topMovie !== "string") {
      throw new Error(
        "Invalid top movie. Top movie cannot be null and must be a string."
      );
    }

    if (user.topShow === null || typeof user.topShow !== "string") {
      throw new Error(
        "Invalid top show. Top show cannot be null and must be a string."
      );
    }

    if (user.topBook === null || typeof user.topBook !== "string") {
      throw new Error(
        "Invalid top book. Top book cannot be null and must be a string."
      );
    }

    if (user.movieShowBook === null || typeof user.movieShowBook !== "string") {
      throw new Error(
        "Invalid movie show book. Movie show book cannot be null and must be a string."
      );
    }

    if (user.musicTaste === null || typeof user.musicTaste !== "string") {
      throw new Error(
        "Invalid music taste. Music taste cannot be null and must be a string."
      );
    }

    if (user.topArtist === null || typeof user.topArtist !== "string") {
      throw new Error(
        "Invalid top artist. Top artist cannot be null and must be a string."
      );
    }
    //#endregion

    const docRef = await addDoc(collection(db, "users"), {
      name: user.name,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
