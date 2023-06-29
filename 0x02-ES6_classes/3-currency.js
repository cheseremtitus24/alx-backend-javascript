export default class Currency {
  constructor(code, name) {
    // sets the _code & _name by validating input using setter methods
    this.code = code;
    this.name = name;
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

  // Method definition
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
