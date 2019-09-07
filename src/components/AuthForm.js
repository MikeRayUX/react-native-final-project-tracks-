import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
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
          title={{ submitButtonText }}
          onPress={() => signup({ email, password })}
        />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({});

export default AuthForm;
