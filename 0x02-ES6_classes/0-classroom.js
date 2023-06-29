export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (Number.isNaN(maxStudentsSize)) {
      throw new TypeError('maxStudentsSize must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._maxStudentsSize = maxStudentsSize;
  }
}
