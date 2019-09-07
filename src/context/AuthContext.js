import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case ('add_error'):
      return { ...state, errorMessage: action.payload }
    case ('signup'):
      return { errorMessage: '', token: action.payload }
    default:
      return state
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', {
        email: email,
        password: password
      });
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'singup', payload: response.data.token });
      navigate('TrackList');
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in

    // hand success by updating state

    // handle failure by showing an error message
  }
}

const signout = (dispatch) => {
  return ({ email, password }) => {
    // sign out
  }
}

export const { Provider, Context } = createDataContext(authReducer, { signup, signin, signout }, { token: null, errorMessage: '' })