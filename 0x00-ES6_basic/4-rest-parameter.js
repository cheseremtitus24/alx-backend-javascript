export default function returnHowManyArguments(...params) {
  let numParams = 0;
  // eslint-disable-next-line no-unused-vars
  for (const _ of params) {
    numParams += 1;
  }
  return numParams;
}
