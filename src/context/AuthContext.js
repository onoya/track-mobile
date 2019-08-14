import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    console.log(response.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const signin = dispatch => ({ email, password }) => dispatch();

const signout = dispatch => () => dispatch();

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
