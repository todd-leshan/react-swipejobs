import actionTypes from "./actionTypes";
import { JOBS_LOADING_STATUS } from "../constants";

import { getUserById, getJobsByUserId, acceptAJobRequest } from "../utils/API";
import { formatJobData } from "../utils/helpers";

export const updateUser = ({ userId, userData }) => {
  return {
    type: actionTypes.UPDATE_USER,
    payload: { userId, userData }
  };
};

export const updateJobs = ({ jobsData }) => {
  return {
    type: actionTypes.UPDATE_JOBS,
    payload: { jobsData }
  };
};

export const updateJobsLoadingStatus = ({ status }) => {
  return {
    type: actionTypes.UPDATE_LOADING_STATUS,
    payload: { status }
  };
};

export const getUserByIdAsync = ({ userId }) => {
  return dispatch => {
    return getUserById(userId)
      .then(res => dispatch(updateUser({ userId, userData: res.data })))
      .catch(error => dispatch(handleError()));
  };
};

export const getJobsByIdAsync = ({ userId }) => {
  return dispatch => {
    dispatch(updateJobsLoadingStatus({ status: JOBS_LOADING_STATUS.LOADING }));
    return getJobsByUserId(userId)
      .then(res => {
        dispatch(
          updateJobsLoadingStatus({ status: JOBS_LOADING_STATUS.LOADED })
        );

        const jobsData = res.data.map(jobData => {
          return formatJobData(jobData);
        });
        dispatch(updateJobs({ jobsData }));
      })
      .catch(error => {
        dispatch(
          updateJobsLoadingStatus({ status: JOBS_LOADING_STATUS.LOADFAILED })
        );
        dispatch(handleError());
      });
  };
};

export const acceptAJob = ({ userId, jobId }) => {
  return {
    type: actionTypes.JOB_ACCEPT,
    payload: { userId, jobId }
  };
};

export const rejectAJob = ({ userId, jobId }) => {
  return {
    type: actionTypes.JOB_REJECT,
    payload: { userId, jobId }
  };
};

export const accpetAJobAsync = ({ userId, jobId }) => {
  return dispatch => {
    return acceptAJobRequest(userId, jobId)
      .then(res => dispatch(updateUser({ userId, userData: res.data })))
      .catch(error => dispatch(handleError()));
  };
};

export const handleError = () => {
  return {
    type: actionTypes.ERROR
  };
};
