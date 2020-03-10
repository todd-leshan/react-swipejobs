import actionTypes from "./actionTypes";

const initialState = {
  showLoadingOverlay: true,
  user: {},
  jobs: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === actionTypes.GET_USER_AND_JOBS) {
    //create helper func
  }

  return state;
};

export default rootReducer;
