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
    console.info(newState);
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

  if (action.type === actionTypes.UPDATE_JOB_STATUS) {
    const jobId = get(action, "payload.jobId");
    const newStatus = get(action, "payload.newStatus");
    const jobs = [...state.jobs];
    const updatedJobs = jobs.map(job => {
      if (job.id === jobId) {
        job.status = newStatus;
      }

      return job;
    });

    return { ...state, jobs: updatedJobs };
  }

  if (action.type === actionTypes.ERROR) {
    return state;
  }
  return state;
};

export default rootReducer;
