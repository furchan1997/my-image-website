import axios from "axios";
import configJson from "../../config.json";

axios.defaults.baseURL = configJson.apiURL;

export function setDefaultCommonHeaders(header, value) {
  axios.defaults.headers.common[header] = value;
}

export const httpService = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  setDefaultCommonHeaders,
};
