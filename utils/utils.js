import User from "../classes/User.js";

export default function transformFbUserToJsUser(uid, userObject) {
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
