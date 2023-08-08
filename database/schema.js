class User {
  constructor(uid, name, email, dateOfBrirth, pronouns) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    this.dateOfBrirth = dateOfBrirth;
    this.pronouns = pronouns;
    this.ethnicId = "";
    this.genderId = "";
    this.personalityType = "";
    this.petsDescription = "";
    this.dietaryRestrictions = "";
    this.coffeeTeaBoba = "";
    this.comfortFood = "";
    this.movieShowBook = "";
    this.topMovie = "";
    this.topShow = "";
    this.musicTaste = "";
    this.topArtist = ""
  }

  constructor(uid, name, email, dateOfBrirth, pronouns, ethnicId, genderId, personalityType, petsDescription, dietaryRestrictions, coffeeTeaBoba, comfortFood, movieShowBook, topMovie, topShow, musicTaste, topArtist) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    this.dateOfBrirth = dateOfBrirth;
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
    this.topArtist = topArtist
  }

  constructor(uid, userObject) {
    this.uid = uid;
    this.name = userObject.name;
    this.email = userObject.email;
    this.dateOfBrirth = userObject.dateOfBrirth;
    this.pronouns = userObject.pronouns;
    this.ethnicId = userObject.ethnicId;
    this.genderId = userObject.genderId;
    this.personalityType = userObject.personalityType;
    this.petsDescription = userObject.petsDescription;
    this.dietaryRestrictions = userObject.dietaryRestrictions;
    this.coffeeTeaBoba = userObject.coffeeTeaBoba;
    this.comfortFood = userObject.comfortFood;
    this.movieShowBook = userObject.movieShowBook;
    this.topMovie = userObject.topMovie;
    this.topShow = userObject.topShow;
    this.musicTaste = userObject.musicTaste;
    this.topArtist = userObject.topArtist
  }

  /** Converts the JavaScript User Class into a plain JavaScript User Object.
   *    @note Use this function for when you want to send a user object to firebase.
   *    
   *    @returns userObject
   */
  toPlainJavaScriptObject() {
    const userObject = {
        name: this.name,
        email: this.email,
        dateOfBrirth: this.dateOfBrirth,
        pronouns: this.pronouns,
        ethnicId: this.ethnicId,
        genderId: this.genderId,
        personalityType: this.personalityType,
        petsDescription: this.petsDescription,
        dietaryRestrictions: this.dietaryRestrictions,
        coffeeTeaBoba: this.coffeeTeaBoba,
        comfortFood: this.comfortFood,
        movieShowBook: this.movieShowBook,
        topMovie: this.topMovie,
        topShow: this.topShow,
        musicTaste: this.musicTaste,
        topArtist: this.topArtist
    }
    return userObject
  }
}

const user = new User();
console.log(user.name);
