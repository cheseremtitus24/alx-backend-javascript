import handleResponseFromAPI from "./2-then";

const promise = Promise.reject();
// console.log(handleResponseFromAPI(promise));
console.log(handleResponseFromAPI(promise));

const promise2 = Promise.resolve();
console.log(handleResponseFromAPI(promise2));