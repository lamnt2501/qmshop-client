import axiosClient from "./axiosClient";

const baseUrl = "/orders";

const ordersApi = {
  getAll() {
    const url = baseUrl;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `${baseUrl}/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = baseUrl;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `${baseUrl}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `${baseUrl}/${id}`;
    return axiosClient.delete(url);
  },
};

export default ordersApi;
