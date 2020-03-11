import axios from "axios";

const API_BASE = "https://test.swipejobs.com/api/worker/";

export const getUserById = async userId => {
  return axios.get(`${API_BASE}${userId}/profile`);
};

export const getJobsByUserId = userId => {
  return axios.get(`${API_BASE}${userId}/matches`);
};

export const acceptAJob = (userId, jobId) => {
  return axios.get(`${API_BASE}${userId}/job/${jobId}/accept`);
};

export const rejectAJob = (userId, jobId) => {
  return axios.get(`${API_BASE}${userId}/job/${jobId}/reject`);
};
