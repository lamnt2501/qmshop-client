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
  update(orders) {
    const url = `${baseUrl}`;
    return axiosClient.put(url, orders);
  },
  remove(id) {
    const url = `${baseUrl}/${id}`;
    return axiosClient.delete(url);
  },
};

export default ordersApi;
