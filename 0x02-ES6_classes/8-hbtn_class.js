export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Setters
  set location(location) {
    if (typeof location === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._location = location;
    } else {
      throw new TypeError('location must be a string');
    }
  }

  set size(size) {
    if (Number.isNaN(size)) {
      throw new TypeError('size must be a number');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._size = size;
    }
  }

  // Getters
  get location() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }

  get size() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  // Primitive Method
  /**
   * +object JS calls object[Symbol.toPrimitive]('number');
  ''+'object'  JS calls object[Symbol.toPrimitive]('string')
  if you do
  if(object) then it will call object[Symbol.toPrimitive]('default')
   * @param {*} hint
   * @returns
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.location;
    } if (hint === 'number') {
      return this.size;
    }
    // when pushed, most classes (except Date)
    // default to returning a number primitive
    return this.size;
  }
}
