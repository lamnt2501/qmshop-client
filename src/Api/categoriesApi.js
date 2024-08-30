import axiosClient from "./axiosClient";

const baseUrl = "/categories";

const categoriesApi = {
  getAll(params) {
    const url = baseUrl;
    return axiosClient.get(url, { params });
  },
  get(slug) {
    const url = `${baseUrl}/${slug}`;
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

export default categoriesApi;
