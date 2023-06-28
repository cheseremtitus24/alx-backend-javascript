import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  const resultArray = new Array();
  const promises = [promise1, promise2];

  return Promise.allSettled(promises)
    .then((results) => results.forEach((result) => {
      if (result.status === 'rejected') {
        result['value'] = result.reason;
        delete result.reason;
      }
      resultArray.push(result);
    })).then(() => resultArray);
}
export default handleProfileSignup;
