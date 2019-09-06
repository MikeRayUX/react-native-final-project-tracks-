import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default: 
    return state
  }
};

const signup = (dispatch) => {
  return async ({ email, password}) => {
    try {
      const response = await trackerApi.post('/signup', {
        email: email,
        password: password
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }

  }
}

const signin = (dispatch) => {
  return ({ email, password}) => {
    // try to sign in

    // hand success by updating state

    // handle failure by showing an error message
  }
}

const signout = (dispatch) => {
  return ({ email, password}) => {
    // sign out
  }
}

export const { Provider, Context } = createDataContext(authReducer, {signup, signin, signout}, { isSignedIn: false })