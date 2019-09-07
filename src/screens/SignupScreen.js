import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(state);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up For Tracker</Text>
      </Spacer>

      <Input
        label='Email'
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />

      <Input
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={(newPassword => setPassword(newPassword))}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {state.errorMessage ? <Text style={styles.errors}>
        {state.errorMessage}
      </Text> : null}

      <Spacer>
        <Button
          title='Sign Up'
          onPress={() => signup({ email, password })}
        />
      </Spacer>

      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
            </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
    paddingHorizontal: 20
  },
  errors: {
    color: 'red',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 15
  },
  link: {
    color: 'blue',
    fontSize: 16
  }

})

export default SignupScreen;