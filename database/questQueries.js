import db from "./FirebaseConfig.js";
import {
  collection,
  addDoc,
  query,
  where,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
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

/** Gets a single quest document from the Firebase with the given quest id and returns as a Quest JavaScript Class Object.
 *    @note the id should be the quest's unique id
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

/** Gets a all the quest documents from the Firebase that is hosted by the user with the given uid. Returns
 *  a list of Quest JavaScript Class Objects.
 *    @note the uid is the host's user id
 *
 *    @params uid: string
 *    @returns listOfQuests: Quest[]
 */
export async function getQuestsByHostUid(uid) {
  try {
    let listOfQuests = [];
    const q = query(collection(db, "quests"), where("hostUid", "==", uid));

    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    querySnapshot.forEach((questDoc) => {
      // doc.data() is never undefined for query doc snapshots
      const questGotten = questDoc.data();
      const questId = questDoc.id;
      console.log(questId, " => ", questGotten);
      listOfQuests.push(transformFbQuestToJsQuest(questId, questGotten));
    });
    return listOfQuests;
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}

/** Gets a all the quest documents from the Firebase that the user with the given uid has RSVPed to. Returns
 *  a list of Quest JavaScript Class Objects.
 *    @note the uid is the user id
 *
 *    @params uid: string
 *    @returns listOfQuests: Quest[]
 */
export async function getAttendingQuestsByUid(uid) {
  try {
    let listOfQuests = [];
    const q = query(
      collection(db, "quests"),
      where("listOfAttendingUsers", "array-contains", uid)
    );

    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    querySnapshot.forEach((questDoc) => {
      // doc.data() is never undefined for query doc snapshots
      const questGotten = questDoc.data();
      const questId = questDoc.id;
      console.log(questId, " => ", questGotten);
      listOfQuests.push(transformFbQuestToJsQuest(questId, questGotten));
    });
    return listOfQuests;
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}
