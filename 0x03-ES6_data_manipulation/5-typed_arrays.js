/**
 *
 * @param {*} length - Number
 * @param {*} position - Number
 * @param {*} value - Number
 */
export default function createInt8TypedArray(length, position, value) {
  // Validate Inputs
  if (Number.isNaN(length) || Number.isNaN(position) || Number.isNaN(value)) {
    throw TypeError();
  }
  const buffer = new ArrayBuffer(length);
  // create data view to hold a value
  //   const int8View = new Int8Array(buffer);
  let int8DataView;
  try {
    int8DataView = new DataView(buffer, 0);
    int8DataView.setInt8(position, value);
  } catch (e) {
    throw RangeError('Position outside range');
  }
  return int8DataView;
}
