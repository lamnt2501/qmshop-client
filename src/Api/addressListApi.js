import axios from "axios";

// value = 1 && idValue = 0                   : get City
// value = 2 && idValue = Id City             : get District
// value = 3 && idValue = Id District         : get Commune / Ward
// value = 4 && idValue = 0                   : get all
// value = 5 && idValue = Id Commune / Ward   : get detail

const BASE_URL = "https://esgoo.net/api-tinhthanh";

const getUrl = (value, idValue = 0) => `${BASE_URL}/${value}/${idValue}.htm`;

const fetchData = (value, idValue) => axios.get(getUrl(value, idValue));

const addressListApi = {
  getAllCity() {
    return fetchData(1);
  },
  getAllDistrictByCityId(cityId) {
    return fetchData(2, cityId);
  },
  getAllWardByDistrictId(districtId) {
    return fetchData(3, districtId);
  },
  getAllAddress() {
    return fetchData(4);
  },
  getDetailByWardId(wardId) {
    return fetchData(5, wardId);
  },
};

export default addressListApi;
