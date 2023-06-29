export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Setters
  set name(name) {
    if (typeof name === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(code) {
    if (typeof code === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Getters
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  // Method definition to override the toString method
  // source: https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies
  get [Symbol.toStringTag]() {
    return this.code;
  }
}
