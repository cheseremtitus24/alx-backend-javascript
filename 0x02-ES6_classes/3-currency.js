export default class Currency {
  constructor(code, name) {
    // sets the _code & _name by validating input using setter methods
    this.code = code;
    this.name = name;
  }

  // Setters
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Method definition
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
