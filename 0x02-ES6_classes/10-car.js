export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Setter
  set brand(brand) {
    if (typeof brand === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._brand = brand;
    } else {
      throw new TypeError('brand must be a string');
    }
  }

  set motor(motor) {
    if (typeof motor === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._motor = motor;
    } else {
      throw new TypeError('motor must be a string');
    }
  }

  set color(color) {
    if (typeof color === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._color = color;
    } else {
      throw new TypeError('color must be a string');
    }
  }

  // Getter
  get brand() {
    // eslint-disable-next-line no-underscore-dangle
    return this._brand;
  }

  get motor() {
    // eslint-disable-next-line no-underscore-dangle
    return this._motor;
  }

  get color() {
    // eslint-disable-next-line no-underscore-dangle
    return this._color;
  }

  // Methods
  // Facilitates the returning of the current class' constructor
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Spec = this.constructor[Symbol.species];
    return new Spec(this.brand, this.motor, this.color);
  }
}
