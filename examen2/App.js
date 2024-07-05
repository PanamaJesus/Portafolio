import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, StatusBar, Text } from 'react-native';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { signIn } from './signIn.js';
import { signUp } from './signUp.js';
import FormSignIn from './components/FormSignIn.js';
import FormSignUp from './components/FormSignUp.js';
import AuthenticatedScreen from './components/authenticatedScreen';

const firebaseConfig = {
  apiKey: "AIzaSyD6-9t5qammyH-ZuuKNRxoWZba6P18txVE",
  authDomain: "logfire-82343.firebaseapp.com",
  projectId: "logfire-82343",
  storageBucket: "logfire-82343.appspot.com",
  messagingSenderId: "1070080560065",
  appId: "1:1070080560065:web:88f531b58a88012f7ffd40",
  measurementId: "G-XYZJ55KHKX"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Sign out error: ", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <AuthenticatedScreen user={user} handleSignOut={handleSignOut} />
      ) : (
        isLogin ? (
          <FormSignIn
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            signIn={() => signIn(email, password)}
          />
        ) : (
          <FormSignUp
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            signUp={() => signUp(email, password)}
          />
        )
      )}
      <StatusBar style='auto' />
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  toggleContainer: {
    marginTop: 20,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
});

export default App;
