import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCity,
  fetchDistrict,
  fetchWard,
  resetListWard,
  selectAddressCity,
  selectAddressDistrict,
  selectAddressListCity,
  selectAddressListDistrict,
  selectAddressListWard,
  selectAddressWard,
  setSelectCity,
  setSelectDistrict,
  setSelectWard,
  setCityName,
  setDistrictName,
  setWardName,
  selectAddressSpecificAddress,
  setSpecificAddress,
} from "../../app/reducers";
import { Options } from "../";
import { Input } from "..";

const NewAddress = () => {
  const dispatch = useDispatch();

  const listCity = useSelector(selectAddressListCity);
  const listDistrict = useSelector(selectAddressListDistrict);
  const listWard = useSelector(selectAddressListWard);

  const selectCity = useSelector(selectAddressCity);
  const selectDistrict = useSelector(selectAddressDistrict);
  const selectWard = useSelector(selectAddressWard);

  const specificAddress = useSelector(selectAddressSpecificAddress);

  useEffect(() => {
    dispatch(fetchCity());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDistrict(selectCity));
    dispatch(setSelectDistrict(""));
    dispatch(resetListWard());
  }, [dispatch, selectCity]);

  useEffect(() => {
    dispatch(fetchWard(selectDistrict));
    dispatch(setSelectWard(""));
  }, [dispatch, selectDistrict]);

  const handleSelectCity = useCallback(
    (event, newValue) => {
      const cityId = newValue;

      // Tìm cityName từ danh sách options dựa trên cityId
      const selectedOption = listCity.find((option) => option.id === cityId);
      const cityName = selectedOption ? selectedOption.name : "";

      dispatch(setSelectCity(cityId));
      dispatch(setCityName(cityName));
    },
    [dispatch, listCity]
  );
  const handleSelectDistrict = useCallback(
    (event, newValue) => {
      const districtId = newValue;

      const selectedOption = listDistrict.find(
        (option) => option.id === districtId
      );
      const districtName = selectedOption ? selectedOption.name : "";

      dispatch(setSelectDistrict(districtId));
      dispatch(setDistrictName(districtName));
    },
    [dispatch, listDistrict]
  );
  const handleSelectWard = useCallback(
    (event, newValue) => {
      const wardId = newValue;

      const selectedOption = listWard.find((option) => option.id === wardId);
      const wardName = selectedOption ? selectedOption.name : "";

      dispatch(setSelectWard(wardId));
      dispatch(setWardName(wardName));
    },
    [dispatch, listWard]
  );

  return (
    <>
      <Options
        options={listCity}
        name="city"
        id="city"
        value={selectCity}
        setValue={handleSelectCity}
      >
        Chọn thành phố
      </Options>
      <Options
        options={listDistrict}
        name="district"
        id="district"
        value={selectDistrict}
        setValue={handleSelectDistrict}
      >
        Chọn quận / huyện
      </Options>
      <Options
        options={listWard}
        name="ward"
        id="ward"
        value={selectWard}
        setValue={handleSelectWard}
      >
        Chọn phường / xã
      </Options>
      <div>
        <Input
          value={specificAddress}
          onChange={(e) => dispatch(setSpecificAddress(e.target.value))}
        >
          Chi tiết địa chỉ giao hàng
        </Input>
      </div>
    </>
  );
};

export default NewAddress;
