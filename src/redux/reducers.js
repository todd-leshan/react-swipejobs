import actionTypes from "./actionTypes";
import get from "lodash/get";

import { JOBS_LOADING_STATUS } from "../constants";

const initialState = {
  isUserLoaded: false,
  jobsLoadingStatus: JOBS_LOADING_STATUS.INIT,
  user: {},
  jobs: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === actionTypes.UPDATE_USER) {
    const userData = get(action, "payload.userData");
    const newState = {
      ...state,
      user: userData,
      isUserLoaded: true
    };
    return newState;
  }

  if (action.type === actionTypes.UPDATE_JOBS) {
    const jobsData = get(action, "payload.jobsData");
    const newState = {
      ...state,
      jobs: jobsData,
      areJobsLoaded: true
    };
    return newState;
  }

  if (action.type === actionTypes.UPDATE_LOADING_STATUS) {
    const status = get(
      action,
      "payload.status",
      JOBS_LOADING_STATUS.LOADFAILED
    );
    return { ...state, jobsLoadingStatus: status };
  }

  if (action.type === actionTypes.ERROR) {
    return state;
  }
  console.info(state);
  return state;
};

export default rootReducer;
