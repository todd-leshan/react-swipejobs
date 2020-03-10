import actionTypes from "./actionTypes";

export const getUserAndJobsByUserId = ({ userId }) => {
  return {
    type: actionTypes.GET_USER_AND_JOBS,
    payload: { userId }
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
