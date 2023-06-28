import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promise = uploadPhoto();
  const promise2 = createUser();
  return Promise.all([promise, promise2]).then((values) => {
    console.log(values);
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
export default handleProfileSignup;