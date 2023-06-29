export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Setters
  set location(location) {
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('location must be a string');
    }
  }

  set size(size) {
    if (isNaN(size)) {
      throw new TypeError('size must be a number');
    } else {
      this._size = size;
    }
  }

  // Getters
  get location() {
    return this._location;
  }

  get size() {
    return this._size;
  }
}
