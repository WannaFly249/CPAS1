import axios from "axios";

/** @param {string} resource */
const get = (resource) => {
  return axios.get(resource);
};

/** @param {string} resource */
/** @param {object} model */
const post = (resource, model) => {
  return axios.post(resource, model);
};

/** @param {string} resource */
/** @param {object} model */
const put = (resource, model) => {
  return axios.put(resource, model);
};

/** @param {string} resource */
/** @param {object} model */
const patch = (resource, model) => {
  return axios.patch(resource, model);
};

/** @param {string} resource */
/** @param {string} id */
const remove = (resource, id) => {
  return axios.delete(resource, id);
};

export const apiProvider = {
  get,
  post,
  put,
  patch,
  remove,
};
