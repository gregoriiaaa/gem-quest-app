class User {
  constructor(
    uid,
    name,
    email,
    dateOfBirth,
    pronouns,
    ethnicId = "",
    genderId = "",
    personalityType = "",
    petsDescription = "",
    dietaryRestrictions = "",
    coffeeTeaBoba = "",
    comfortFood = "",
    movieShowBook = "",
    topMovie = "",
    topShow = "",
    musicTaste = "",
    topArtist = ""
  ) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.pronouns = pronouns;
    this.ethnicId = ethnicId;
    this.genderId = genderId;
    this.personalityType = personalityType;
    this.petsDescription = petsDescription;
    this.dietaryRestrictions = dietaryRestrictions;
    this.coffeeTeaBoba = coffeeTeaBoba;
    this.comfortFood = comfortFood;
    this.movieShowBook = movieShowBook;
    this.topMovie = topMovie;
    this.topShow = topShow;
    this.musicTaste = musicTaste;
    this.topArtist = topArtist;
  }

  /** Converts the JavaScript User Class into a plain JavaScript User Object.
   *    @note Use this function for when you want to send a user object to firebase.
   *
   *    @returns userObject
   */
  toPlainJavaScriptObject() {
    const userObject = {
      name: this.name ? this.name : "",
      email: this.email ? this.name : "",
      dateOfBirth: this.dateOfBirth ? this.name : "",
      pronouns: this.pronouns ? this.name : "",
      ethnicId: this.ethnicId ? this.name : "",
      genderId: this.genderId ? this.name : "",
      personalityType: this.personalityType ? this.name : "",
      petsDescription: this.petsDescription ? this.name : "",
      dietaryRestrictions: this.dietaryRestrictions ? this.name : "",
      coffeeTeaBoba: this.coffeeTeaBoba ? this.name : "",
      comfortFood: this.comfortFood ? this.name : "",
      movieShowBook: this.movieShowBook ? this.name : "",
      topMovie: this.topMovie ? this.name : "",
      topShow: this.topShow ? this.name : "",
      musicTaste: this.musicTaste ? this.name : "",
      topArtist: this.topArtist ? this.name : "",
    };
    return userObject;
  }
}

// const user = new User();
// console.log(user.name);

export default User;
