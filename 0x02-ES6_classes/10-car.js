export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Setter
  set brand(brand) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
  }

  set motor(motor) {
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
  }

  set color(color) {
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
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
    return new Spec();
  }
}
