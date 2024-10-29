import axiosClient from "./axiosClient";

const baseUrl = "/discounts";

const brandsApi = {
  getAll() {
    const url = baseUrl;
    return axiosClient.get(url);
  },
};

export default brandsApi;
