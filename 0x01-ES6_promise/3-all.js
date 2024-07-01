import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([
    uploadPhoto().catch((error) => {
      console.error('Error uploading photo:', error);
      return { body: null }; // Return a default value
    }),
    createUser().catch((error) => {
      console.error('Error creating user:', error);
      return { firstName: null, lastName: null }; // Return default values
    }),
  ])
    .then(([uploadPhotoResult, createUserResult]) => {
      console.log(uploadPhotoResult.body, createUserResult.firstName, createUserResult.lastName);
    })
    .catch((error) => {
      console.log('Signup system offline:', error);
    });
}
