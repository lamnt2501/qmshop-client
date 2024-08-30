import axiosClient from "./axiosClient";

const baseUrl = "/styles";

const stylesApi = {
  getAll(params) {
    const url = baseUrl;
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `${baseUrl}/${id}`;
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

export default stylesApi;
