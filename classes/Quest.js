class Quest {
  constructor(id, hostUid, date, location) {
    this.id = id;
    this.hostUid = hostUid;
    this.date = date;
    this.location = location;
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
      location: this.location ?? "",
    };
    return questObject;
  }
}

// const user = new User();
// console.log(user.name);

export default Quest;
