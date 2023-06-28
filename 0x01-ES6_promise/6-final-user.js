import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  // Verify that all inputs are strings
  if (firstName.constructor === String
     && lastName.constructor === String && lastName.constructor === String) {
    // proceed to processing
    return Promise.allSettled(
      [signUpUser(firstName, lastName), uploadPhoto(fileName)],
    ).then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }))).catch(() => console.log('Signup system offline'));
  }

  return Error('Inputs must be Strings');
}
export default handleProfileSignup;
