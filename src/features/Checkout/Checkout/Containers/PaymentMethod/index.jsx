import { paymentMethods } from "../../../../../config";
import { Image } from "../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCheckoutPaymentMethod,
  setPaymentMethod,
} from "../../../../../app/reducers";
const PaymentMethod = () => {
  const dispatch = useDispatch();
  const paymentMethod = useSelector(selectCheckoutPaymentMethod);

  return (
    <div className="space-y-2">
      {paymentMethods.map((method) => (
        <label
          key={method.provider}
          className="w-full has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 p-4 rounded-md flex items-center shadow"
        >
          <input
            type="radio"
            name="payment"
            checked={method.provider === paymentMethod.provider}
            onChange={() =>
              dispatch(
                setPaymentMethod({
                  name: method.name,
                  provider: method.provider,
                })
              )
            }
            className="checked:border-indigo-500 h-5 w-5"
          />
          <div className="flex items-center space-x-5">
            <div className="flex items-center w-8 h-8">
              <Image
                data={{
                  name: method.name,
                  image: method.imageUrl,
                }}
              />
            </div>
            <h2 className="text-lg">{method.description}</h2>
          </div>
        </label>
      ))}
    </div>
  );
};

export default PaymentMethod;
