import db from "./FirebaseConfig.js";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import Quest from "../classes/Quest.js";
import { transformFbQuestToJsQuest } from "../utils/utils.js";

/** Adds a new quest with a firebase auto-generated id to the database.
 *
 *    @params quest: Javascript Class Object
 *    @returns questObject
 */
export async function addNewQuest(quest) {
  try {
    if (!quest || !(quest instanceof Quest)) {
      throw Error(
        "Invalid quest object. Quest object cannot be null and must be an instance of the Quest class."
      );
    }

    const questObject = quest.toPlainJavaScriptObject();

    const docRef = await addDoc(collection(db, "quests"), questObject);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

/** Gets a quest from the Firebase with the given id and returns a Quest JavaScript Class Object.
 *
 *    @params id: string
 *    @returns quest: Quest
 */
export async function getQuestById(id) {
  try {
    if (!id || typeof id !== "string") {
      throw Error("Invalid quest id. Quest id must be a non-empty string.");
    }

    const questDocSnap = await getDoc(doc(db, "quests", id));

    if (questDocSnap.exists()) {
      const questGotten = questDocSnap.data();
      console.log({ questGotten: questGotten });
      return transformFbQuestToJsQuest(id, questGotten);
    } else {
      throw Error("No such document!");
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}
