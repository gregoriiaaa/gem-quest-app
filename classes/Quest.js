class Quest {
  constructor(
    id,
    hostUid,
    date,
    time,
    ageGroup,
    rsvpLimit = "",
    restaurant = "",
    outdoorSpot = "",
    planOfAction
  ) {
    this.id = id;
    this.hostUid = hostUid;
    this.date = date;
    this.time = time;
    this.ageGroup = ageGroup;
    this.rsvpLimit = rsvpLimit;
    this.restaurant = restaurant;
    this.outdoorSpot = outdoorSpot;
    this.planOfAction = planOfAction;
  }

  /** Converts the JavaScript Quest Class into a plain JavaScript Quest Object.
   *    @note Use this function for when you want to send a quest object to firebase.
   *
   *    @returns questObject
   */
  toPlainJavaScriptObject() {
    const questObject = {
      hostUid: this.hostUid ?? "",
      date: this.date ?? "",
      time: this.time ?? "",
      ageGroup: this.ageGroup ?? "",
      rsvpLimit: this.rsvpLimit ?? "",
      restaurant: this.restaurant ?? "",
      outdoorSpot: this.outdoorSpot ?? "",
      planOfAction: this.planOfAction ?? "",
    };
    return questObject;
  }
}

// const user = new User();
// console.log(user.name);

export default Quest;
