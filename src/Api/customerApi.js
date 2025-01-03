import axiosClient from "./axiosClient";

const baseUrl = "/users";

const customerAddresses = "/addresses";

const customerApi = {
  getInfomations() {
    const url = `${baseUrl}/me`;
    return axiosClient.get(url);
  },
  changePassword(newPassword) {
    const url = `${baseUrl}/changePassword`;
    return axiosClient.post(url, newPassword);
  },
  updateInfomations(newData) {
    const url = baseUrl;
    return axiosClient.put(url, newData);
  },

  updateAvatar(newAvatar) {
    const url = `${baseUrl}/avatar`;
    return axiosClient.put(url, newAvatar);
  },

  getAddresses() {
    const url = baseUrl + customerAddresses;
    return axiosClient.get(url);
  },
  addNewAddress(newAddress) {
    const url = customerAddresses;
    return axiosClient.post(url, newAddress);
  },
  updateAddress(addressId, newAddress) {
    const url = `${customerAddresses}/${addressId}`;
    return axiosClient.put(url, newAddress);
  },
  deleteAddress(addressId ) {
    const url = `${customerAddresses}/${addressId}`;
    return axiosClient.delete(url);
  },
};

export default customerApi;
