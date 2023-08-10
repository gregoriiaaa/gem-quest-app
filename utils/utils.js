import Quest from "../classes/Quest.js";
import User from "../classes/User.js";

// I use this function for the queries stuff
export function transformFbUserToJsUser(uid, userObject) {
  return new User(
    uid,
    userObject.name,
    userObject.email,
    userObject.dateOfBirth,
    userObject.pronouns,
    userObject.ethnicId,
    userObject.genderId,
    userObject.personalityType,
    userObject.petsDescription,
    userObject.dietaryRestrictions,
    userObject.coffeeTeaBoba,
    userObject.comfortFood,
    userObject.movieShowBook,
    userObject.topMovie,
    userObject.topShow,
    userObject.musicTaste,
    userObject.topArtist
  );
}

export function transformFbQuestToJsQuest(id, questObject) {
  return new Quest(
    id,
    questObject.hostUid,
    questObject.date,
    questObject.location
  );
}

// Feel free to add any util functions you need!
