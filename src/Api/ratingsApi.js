import axiosClient from "./axiosClient";

const baseUrl = "/ratings";

const ratingsApi = {
  getAll(productId) {
    const url = `${baseUrl}/product/${productId}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `${baseUrl}`;
    return axiosClient.post(url, data);
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

export default ratingsApi;
