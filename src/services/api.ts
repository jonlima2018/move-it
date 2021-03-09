import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
  params: {
    client_id: "ac6d82aa857e3f37eaae",
    client_secret: "760936e542faee53221d35510592b26bf480beb0",
  },
});

export default api;
