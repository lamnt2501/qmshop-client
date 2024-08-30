import axiosClient from "./axiosClient";

const baseUrl = "/users";

const customerAddresses = "/addresses";

const customerApi = {
  getInfomations() {
    const url = `${baseUrl}/me`;
    return axiosClient.get(url);
  },
  changePassword(currentPassword, newPassword, confirmPassword) {
    const url = `${baseUrl}/changePassword`;
    return axiosClient.post(url, {
      currentPassword,
      newPassword,
      confirmPassword,
    });
  },
  updateInfomations(phoneNumber, name) {
    const url = baseUrl;
    return axiosClient.put(url, { phoneNumber, name });
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
};

export default customerApi;
