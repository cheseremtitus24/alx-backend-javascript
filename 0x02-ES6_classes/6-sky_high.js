import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // Setters
  set floors(floors) {
    if (Number.isNaN(floors)) {
      throw new TypeError('floors must be a number');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._floors = floors;
    }
  }

  // Getters
  get floors() {
    // eslint-disable-next-line no-underscore-dangle
    return this._floors;
  }

  // Override
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
