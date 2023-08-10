class Points {
  constructor(id, totalPts, gemLevel) {
    this.id = id;
    this.totalPts = totalPts;
    this.gemLevel = gemLevel;
  }

  /** Converts the JavaScript User Class into a plain JavaScript User Object.
   *
   * @author Randy Nguyen
   * @note Use to send Points object to firebase. ID is added separately as
   * a parameter.
   * @returns pointsObject
   */
  toPlainJavaScriptObject() {
    const pointsObject = {
      totalPts: this.totalPts ? this.totalPts : "",
      gemLevel: this.gemLevel ? this.gemLevel : "",
    };
    return pointsObject;
  }
}

export default Points;
