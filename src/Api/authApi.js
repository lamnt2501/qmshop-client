import axiosClient from "./axiosClient";

const baseUrl = "/auth";

const authApi = {
  login(credentials) {
    const url = `${baseUrl}/login`;
    return axiosClient.post(url, credentials);
  },
  register(infomation) {
    const url = `${baseUrl}/register`;
    return axiosClient.post(url, infomation);
  },
};

export default authApi;
