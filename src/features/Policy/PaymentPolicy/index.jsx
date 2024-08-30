import React from "react";
import { BannerHeadPage } from "../../../components";

const PaymentPolicy = () => {
  return (
    <>
      <div>
        <BannerHeadPage title={"Chính sách thanh toán"} />
      </div>
      <div className="container mx-auto p-4 max-w-6xl mt-8">
        <section className="mb-8">
          <p className="mt-4">
            Chấp nhận 2 hình thức thanh toán: Thanh toán khi nhận hàng & Thanh
            toán bằng ví VNPAY. Quý khách có thể thanh toán bằng 2 hình thức sau
            khi kết thúc đơn hàng:
          </p>

          <ul className="list-disc pl-5 mt-4">
            <li>
              <h4 className="mt-4">
                Thanh toán khi nhận hàng (COD) : Quý khách thanh toán bằng tiền
                mặt khi nhận được sản phẩm từ nhân viên giao hàng.
              </h4>
            </li>
            <li>
              <h4 className="mt-4">
                Thanh toán bằng ví VNPAY: Quý khách thanh toán bằng ví VNPAY,
                sản phẩm sẽ được chuyển đến quý khách trong vòng 1-5 ngày làm
                việc sau khi thanh toán thành công.
              </h4>
            </li>
          </ul>
        </section>
        <section className="mb-4">
          <h3 className="text-2xl font-semibold text-red-800 mb-4">
            Thông tin ví VNPAY của tôi không được chấp nhận. Tôi phải làm gì?
          </h3>

          <ul className="mt-4 space-y-0">
            <li>
              Quý khách vui lòng kiểm tra lại đường truyền mạng và đặt hàng lại.
              Nếu ví VNPAY vẫn không được chấp nhận, vui lòng kiểm tra lại ngân
              hàng đã liên kết với
            </li>
            <li>
              ví VNPAY, hoặc liên hệ với bộ phận Chăm sóc khách hàng của chúng
              tôi để được hỗ trợ thêm.
            </li>
          </ul>
          <div className="mt-2">
            Định danh thông tin trên ví điện tử trước khi thực hiện bất kì giao
            dịch nào.
          </div>
        </section>
        <section className="mb-4 mt-8">
          <h3 className="text-2xl font-semibold text-red-800 mb-4">
            Máy của tôi bị treo trong quá trình thanh toán. Làm thế nào để biết
            tôi đã đặt hàng thành công?
          </h3>

          <ul className="mt-4 space-y-0">
            <li>
              Khi đặt hàng thành công, quý khách sẽ nhìn thấy thông báo "Đặt
              hàng thành công" và nhận được Mã số đơn hàng. Nếu quý khách vẫn
              chưa nhận
            </li>
            <li>
              được vui lòng đặt hàng lại lần nữa hoặc liên hệ với bộ phận Chăm
              sóc khách hàng để xác nhận đơn hàng của quý khách.
            </li>
          </ul>
        </section>

        <ul className="mt-16 space-y-2">
          <li className="text-blue-600 font-bold">
            Thông tin bộ phận Chăm sóc khách hàng:
          </li>
          <li>
            <span className="font-bold">Email:</span>
            <span className="text-blue-400 font-bold">
              {" "}
              tuvan_online@qmshop.com.vn
            </span>
          </li>
          <li>
            <span className="font-bold">Hotline:</span>
            <span className="text-red-800 font-bold"> 0365.087.570</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PaymentPolicy;
