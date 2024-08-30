import axiosClient from "./axiosClient";

const baseUrl = "/addresses";

const customerAddressesApi = {
  getAddresses() {
    const url = baseUrl;
    return axiosClient.get(url);
  },
  addNewAddress(newAddress) {
    const url = baseUrl;
    return axiosClient.post(url, newAddress);
  },
  updateAddress(addressId, newAddress) {
    const url = `${baseUrl}/${addressId}`;
    return axiosClient.put(url, newAddress);
  },
};

export default customerAddressesApi;
