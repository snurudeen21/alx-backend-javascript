async function handleProfileSignup() {
  try {
    const [uploadPhotoResult, createUserResult] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(uploadPhotoResult.body, createUserResult.firstName, createUserResult.lastName);
  } catch (error) {
    console.log('Signup system offline');
  }
}
