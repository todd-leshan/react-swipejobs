import axios from "axios";

export const getUserById = async userId => {
  return axios.get(`https://test.swipejobs.com/api/worker/${userId}/profile`);
};

export const getJobsByUserId = userId => {
  return axios.get(`https://test.swipejobs.com/api/worker/${userId}/matches`);
};

export const acceptAJobRequest = (userId, jobId) => {
  return axios.get(
    `https://test.swipejobs.com/api/worker/${userId}/job/${jobId}/accept`
  );
};

export const rejectAJobRequest = (userId, jobId) => {
  return axios.get(
    `https://test.swipejobs.com/api/worker/${userId}/job/${jobId}/reject`
  );
};
