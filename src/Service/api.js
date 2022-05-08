import axios from "axios";

const Service = {
  get: (url) => axios.get(url),
  post: (url, data) => axios.post(url, data),
};

///
