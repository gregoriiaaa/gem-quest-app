class Quest {
  constructor(
    id,
    title,
    hostUid,
    date,
    time,
    ageGroup,
    rsvpLimit = "",
    restaurant = "",
    outdoorSpot = "",
    planOfAction,
    listOfAttendingUsers = []
  ) {
    this.id = id;
    this.title = title;
    this.hostUid = hostUid;
    this.date = date;
    this.time = time;
    this.ageGroup = ageGroup;
    this.rsvpLimit = rsvpLimit;
    this.restaurant = restaurant;
    this.outdoorSpot = outdoorSpot;
    this.planOfAction = planOfAction;
    this.listOfAttendingUsers = listOfAttendingUsers;
  }

  /** Converts the JavaScript Quest Class into a plain JavaScript Quest Object.
   *    @note Use this function for when you want to send a quest object to firebase.
   *
   *    @returns questObject
   */
  toPlainJavaScriptObject() {
    const questObject = {
      title: this.title ?? "",
      hostUid: this.hostUid ?? "",
      date: this.date ?? "",
      time: this.time ?? "",
      ageGroup: this.ageGroup ?? "",
      rsvpLimit: this.rsvpLimit ?? "",
      restaurant: this.restaurant ?? "",
      outdoorSpot: this.outdoorSpot ?? "",
      planOfAction: this.planOfAction ?? "",
      listOfAttendingUsers: this.listOfAttendingUsers ?? [],
    };
    return questObject;
  }
}

// const user = new User();
// console.log(user.name);

export default Quest;
