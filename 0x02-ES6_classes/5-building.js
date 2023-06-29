export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // Setters
  set sqft(sqft) {
    if (Number.isNaN(sqft)) {
      throw new TypeError('sqft must be a number');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._sqft = sqft;
    }
  }

  // Getters
  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }
}
