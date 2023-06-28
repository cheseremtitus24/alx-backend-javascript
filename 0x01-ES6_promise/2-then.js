// Source reference: https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val
function log() {
  console.log('Got a response from the API');
}

function handleResponseFromAPI(promise) {
  // resolve promise
  return promise.then((result) => {
    // console.log(result); // "initResolve"
    return { status: 200, body: 'Success' };
  }).then(function (result) {
    // console.log(result);
    return result;
  })
    .catch(function (result) {
      // console.log(result); // "normalReturn"
      return new Error();
    }).finally(function (result) {
      log();
      // console.log(result);
      return result;
    });

}
export default handleResponseFromAPI;
