import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default: 
    return state
  }
};

const signup = (dispatch) => {
  return ({ email, password}) => {

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