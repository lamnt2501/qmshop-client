import axiosClient from "./axiosClient";

const baseUrl = "/products";

const productsApi = {
  getAll(params) {
    const url = baseUrl;
    return axiosClient.get(url, { params });
  },
  get(query) {
    const url = `${baseUrl}/${query}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `${baseUrl}/${data.id}`;
    return axiosClient.post(url);
  },
  update(data) {
    const url = `${baseUrl}/${data.id}`;
    return axiosClient.put(url);
  },
  remove(id) {
    const url = `${baseUrl}/${id}`;
    return axiosClient.delete(url);
  },
};

export default productsApi;
