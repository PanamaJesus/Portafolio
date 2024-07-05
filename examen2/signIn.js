import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

export const signIn = async (email, password) => {
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully");
  } catch (error) {
    console.error("Authentication error: " + error.message);
  }
};
