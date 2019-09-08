import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return <View style={styles.container}>
    <NavigationEvents onWillBlur={() => clearErrorMessage()} />
    <AuthForm
      headerText="Sign In To Tracker"
      errorMessage={state.errorMessage}
      submitButtonText='Sign In'
      onSubmit={signin}
    />

    <NavLink
      text="Don't have an account? Sign up Instead!"
      routeName='Signup'
    />
  </View>
}

SigninScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
    paddingHorizontal: 20
  }
})

export default SigninScreen;