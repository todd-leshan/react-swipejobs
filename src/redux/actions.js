import actionTypes from "./actionTypes";
import { JOBS_LOADING_STATUS, JOB_STATUS } from "../constants";

import {
  getUserById,
  getJobsByUserId,
  acceptAJob,
  rejectAJob
} from "../utils/API";
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

export const accpetAJobAsync = ({ userId, jobId }) => {
  return dispatch => {
    return acceptAJob(userId, jobId)
      .then(res => {
        const resData = res.data;
        if (resData.success === true) {
          dispatch(updateJobStatus({ jobId, newStatus: JOB_STATUS.ACCEPTED }));
        } else {
          dispatch(
            updateJobStatus({ jobId, newStatus: JOB_STATUS.NOTAVAILABLE })
          );
        }
      })
      .catch(error =>
        dispatch(updateJobStatus({ jobId, newStatus: JOB_STATUS.NOTAVAILABLE }))
      );
  };
};

export const rejectAJobAsync = ({ userId, jobId }) => {
  return dispatch => {
    return rejectAJob(userId, jobId)
      .then(res => {
        const resData = res.data;
        if (resData.success === true) {
          dispatch(updateJobStatus({ jobId, newStatus: JOB_STATUS.REJECTED }));
        } else {
          dispatch(
            updateJobStatus({ jobId, newStatus: JOB_STATUS.NOTAVAILABLE })
          );
        }
      })
      .catch(error =>
        dispatch(updateJobStatus({ jobId, newStatus: JOB_STATUS.NOTAVAILABLE }))
      );
  };
};

export const updateJobStatus = ({ jobId, newStatus }) => {
  return {
    type: actionTypes.UPDATE_JOB_STATUS,
    payload: { jobId, newStatus }
  };
};

export const handleError = () => {
  return {
    type: actionTypes.ERROR
  };
};
