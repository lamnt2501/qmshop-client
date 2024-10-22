import { CustomBox } from "../../../../../components";
import ChangeAvata from "../../container/ChangeAvata";
import ChangeInfomations from "../../container/ChangeInfomations";
import ChangePassword from "../../container/ChangePassword";

const Infomation = () => {
  return (
    <>
      <CustomBox className={"mb-10"}>
        <ChangeAvata/>
      </CustomBox>
      <CustomBox className={"mb-10"}>
        <ChangeInfomations />
      </CustomBox>
      <CustomBox>
        <ChangePassword />
      </CustomBox>
    </>
  );
};

export default Infomation;
