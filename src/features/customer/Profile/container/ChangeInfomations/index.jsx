import { useEffect, useState } from "react";
import { selectCustomerStatus } from "../../../../../app/reducers";
import { useSelector } from "react-redux";
import InputValue from "../../components/InputValue";
import { FETCH_SUCCEEDED } from "../../../../../config";
import PropTypes from "prop-types";
import { CustomLink } from "../../../../../components";

const ChangeInfomations = ({ customerName, customerPhone, customerEmail }) => {
  const customerStatus = useSelector(selectCustomerStatus);

  const [customerNewName, setCustomerNewName] = useState("");
  const [customerNewPhone, setCustomerNewPhone] = useState("");
  const [customerNewEmail, setCustomerNewEmail] = useState("");

  useEffect(() => {
    if (customerStatus === FETCH_SUCCEEDED) {
      setCustomerNewName(customerName);
      setCustomerNewPhone(customerPhone);
      setCustomerNewEmail(customerEmail);
    }
  }, [customerStatus, customerName, customerPhone, customerEmail]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      <div className="col-span-2 md:col-span-1 bg-gray-200 p-8">
        <h1 className="text-3xl font-normal ">Thông tin cá nhân</h1>
        <p>
          Đây là thông tin riêng tư và sẽ không được chia sẻ với người khác. Hãy
          đọc{" "}
          <CustomLink url={"/privacy-policy"} className={"text-red-400"}>
            Chính sách bảo mật thông tin
          </CustomLink>{" "}
          bất cứ khi nào bạn muốn!
        </p>
      </div>
      <div className="col-span-2">
        <div className="flex my-10">
          <div className="flex flex-col px-10 gap-4">
            <InputValue
              newValue={customerNewName}
              value={customerName}
              setNewValue={setCustomerNewName}
            >
              Họ và tên
            </InputValue>

            <InputValue
              newValue={customerNewPhone}
              value={customerPhone}
              setNewValue={setCustomerNewPhone}
            >
              Số điện thoại
            </InputValue>

            <InputValue
              type={"text"}
              newValue={customerNewEmail}
              value={customerEmail}
              setNewValue={setCustomerNewEmail}
            >
              Email
            </InputValue>
          </div>
        </div>
      </div>
    </div>
  );
};
ChangeInfomations.propTypes = {
  customerName: PropTypes.string,
  customerPhone: PropTypes.string,
  customerEmail: PropTypes.string,
};
export default ChangeInfomations;
