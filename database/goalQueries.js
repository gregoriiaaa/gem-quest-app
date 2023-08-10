import db from "./FirebaseConfig.js";
import { firestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import User from "../classes/User.js";
import Goal from "../classes/Goal.js";

const goalsCollectionRef = collection(db, "goals");

/**
 * Creates the "goals" collection in the firebase.
 *
 * @author Randy Nguyen
 * @param {goalClassObject[]} goals
 */
export async function initGoals(goals) {
  for (let i = 0; i < goals.length; i++) {
    if (!goals[i] || !(goals[i] instanceof Goal)) {
      throw Error(
        "Invalid Goal object. Goal object cannot be null and must be an instance of the Goal class."
      );
    }
    await addDoc(goalsCollectionRef, goals[i].toPlainJavaScriptObject());
  }
}

// Firestore Goal converter
const goalConverter = {
  toFirestore: (goal) => {
    return {
      description: goal.description,
      index: goal.index,
      maxProgress: goal.maxProgress,
      value: goal.value,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Goal(data.description, data.index, data.maxProgress, data.value);
  },
};

export async function getUserGoals(uid) {
  const userGoalsRef = doc(db, "users", uid, "userGoals");
  const userGoalsDocSnap = await getDoc(userGoalsRef);

  userGoalsDocSnap.forEach((doc) => {
    doc.withConverter(goalConverter);
    const city = docSnap.data();
    // Use a City instance method
    console.log(city.toString());
  });
}
