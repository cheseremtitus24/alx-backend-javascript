import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // Setters
  set floors(floors) {
    if (isNaN(floors)) {
      throw new TypeError('floors must be a number');
    } else {
      this._floors = floors;
    }
  }

  // Getters
  get floors() {
    return this._floors;
  }

  // Override
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
