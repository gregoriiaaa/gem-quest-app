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
    topBook = "",
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
    this.topBook = topBook;
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
      email: this.email ? this.email : "",
      dateOfBirth: this.dateOfBirth ? this.dateOfBirth : "",
      pronouns: this.pronouns ? this.pronouns : "",
      ethnicId: this.ethnicId ? this.ethnicId : "",
      genderId: this.genderId ? this.genderId : "",
      personalityType: this.personalityType ? this.personalityType : "",
      petsDescription: this.petsDescription ? this.petsDescription : "",
      dietaryRestrictions: this.dietaryRestrictions
        ? this.dietaryRestrictions
        : "",
      coffeeTeaBoba: this.coffeeTeaBoba ? this.coffeeTeaBoba : "",
      comfortFood: this.comfortFood ? this.comfortFood : "",
      movieShowBook: this.movieShowBook ? this.movieShowBook : "",
      topMovie: this.topMovie ? this.topMovie : "",
      topShow: this.topShow ? this.topShow : "",
      topBook: this.topBook ? this.topBook : "",
      musicTaste: this.musicTaste ? this.musicTaste : "",
      topArtist: this.topArtist ? this.topArtist : "",
    };
    return userObject;
  }
}

// const user = new User();
// console.log(user.name);

export default User;
