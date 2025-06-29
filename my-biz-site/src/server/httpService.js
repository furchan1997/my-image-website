import axios from "axios";
import configJson from "../../config.json";

const apiUrl = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = apiUrl;

export function setDefaultCommonHeaders(header, value) {
  axios.defaults.headers.common[header] = value;
}

export const httpService = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  setDefaultCommonHeaders,
};
