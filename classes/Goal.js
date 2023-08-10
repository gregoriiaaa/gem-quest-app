class Goal {
  constructor(index, description, value, maxProgress) {
    this.index = index;
    this.description = description;
    this.value = value;
    this.maxProgress = maxProgress;
  }

  /** Converts the JavaScript User Class into a plain JavaScript User Object.
   *
   * @author Randy Nguyen
   * @note Use to send Goal object to firebase. ID is added separately as
   * a parameter.
   * @returns goalObject
   */
  toPlainJavaScriptObject() {
    const goalObject = {
      index: this.index ? this.index : "",
      description: this.description ? this.description : "",
      value: this.value ? this.value : "",
      maxProgress: this.maxProgress ? this.maxProgress : "",
    };
    return goalObject;
  }
}

export default Goal;
