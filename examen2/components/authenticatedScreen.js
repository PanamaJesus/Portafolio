import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const AuthenticatedScreen = ({ user, handleSignOut }) => (
  <View style={styles.authContainer}>
    <Text style={styles.title}>Welcome!</Text>
    <Text style={styles.emailText}>{user.email}</Text>
    <Button title='Log Out' color='#e74c3c' onPress={handleSignOut} />
  </View>
);

const styles = StyleSheet.create({
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AuthenticatedScreen;
