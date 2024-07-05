import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';

export const signUp = async (email, password) => {
  const auth = getAuth();
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created successfully");
  } catch (error) {
    console.error("Authentication error: " + error.message);
  }
};
