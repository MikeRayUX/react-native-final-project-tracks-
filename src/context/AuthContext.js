import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case ('add_error'):
      return { ...state, errorMessage: action.payload }
    case ('clear_error_message'):
      return { ...state, errorMessage: '' }
    case ('signin'):
      return { errorMessage: '', token: action.payload }
    case ('signout'):
      return { errorMessage: '', token: null }
    default:
      return state
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
}

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: 'clear_error_message' })
  }
}

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', {
        email: email,
        password: password
      });
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signin', payload: response.data.token });
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up'
      })
    }
  }
}

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', {
        email: email,
        password: password
      });
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signin', payload: response.data.token });
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: "Something went wrong with signin"
      })
    }
  }
}

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');
  }
}

export const { Provider, Context } = createDataContext(authReducer, { signup, signin, signout, clearErrorMessage, tryLocalSignin }, { token: null, errorMessage: '' })