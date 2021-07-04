// Calling the function loginUser should return an object with type property set to the string LOGIN.

// Passed
// Calling the function logoutUser should return an object with type property set to the string LOGOUT.

// Passed
// The store should be initialized with an object with property login set to false.

// Passed
// Dispatching loginUser should update the login property in the store state to true.

// Passed
// Dispatching logoutUser should update the login property in the store state to false.

// Passed
// The authReducer function should handle multiple action types with a switch statement.

// Passed
// LOGIN and LOGOUT should be declared as const values and should be assigned strings of LOGINand LOGOUT.

// Passed
// The action creators and the reducer should reference the LOGIN and LOGOUT constants.

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
