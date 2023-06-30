import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  // setters
  set range(range) {
    // eslint-disable-next-line no-underscore-dangle
    this._range = range;
  }

  // getters
  get range() {
    // eslint-disable-next-line no-underscore-dangle
    return this._range;
  }
  // Methods
  // Facilitates the returning of the current class' constructor

  /* eslint-disable class-methods-use-this */
  cloneCar() {
    return new Car();
  }
  /* eslint-enable class-methods-use-this */
}
