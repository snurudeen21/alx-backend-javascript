import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoResult, createUserResult]) => {
      console.log(uploadPhotoResult.body, createUserResult.firstName, createUserResult.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
