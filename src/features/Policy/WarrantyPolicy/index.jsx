import React from "react";
import { BannerHeadPage } from "../../../components";
import { logoApp } from "../../../config";
import { FaCameraRetro } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GiSonicShoes } from "react-icons/gi";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import "./styles.css";

const WarrantyPolicy = () => {
  return (
    <>
      <div>
        <BannerHeadPage title={"Chính sách bảo hành và đổi trả hàng"} />
      </div>
      <h1 className="mt-4 mb-0 w-full max-w-7xl mx-auto text-left font-bold text-[#c0392b] text-xl p-2 relative z-10 ml-2">
        I. Chính sách đổi trả
      </h1>
      <div
        className="flex flex-col items-center p-6 min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://www.elle.vn/wp-content/uploads/2019/04/03/elle-viet-nam-blog-giay-the-thao1-1024x683.jpeg')`,
        }}
      >
        <div className="rounded-lg shadow-md p-2 w-full max-w-7xl bg-white bg-opacity-80">
          <div className="flex justify-center h-8 mb-20">
            <img src={logoApp.url} alt="Logo" className="h-full" />
          </div>
          <h1 className="text-center text-3xl font-semibold text-[#403130]">
            CHÍNH SÁCH ĐỔI HÀNG <br />
            <div className="flex justify-center h-14 mt-4">
              <img src={logoApp.url} alt="Logo" className="h-full" />
            </div>
          </h1>
          <div className="flex justify-between mt-32 items-stretch gap-8">
            <div
              className="w-1/3 flex flex-col items-center justify-center"
              style={{ minHeight: "200px", marginBottom: "60px" }}
            >
              <FaCameraRetro className="w-24 h-24 mb-4 text-gray-700" />
              <p className="text-center text-[#403130] font-semibold">
                Kiểm tra và
                <br /> quay video khi mở hàng
              </p>
            </div>
            <div
              className="w-1/3 flex flex-col items-center justify-center "
              style={{ minHeight: "200px" }}
            >
              <SlCalender className="w-24 h-24 mb-4 text-gray-700 mr-40" />
              <p className="text-center font-semibold text-[#403130] mr-40">
                <span className="text-2xl">THỜI GIAN ĐỔI HÀNG:</span>
                <br />
                <span className="block" style={{ textAlign: "left" }}>
                  Trong vòng 10 ngày
                </span>
                <span className="block" style={{ textAlign: "left" }}>
                  kể từ ngày nhận hàng
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-16 items-stretch">
            <div className="w-1/3 flex flex-col items-center">
              <div className="relative">
                <GiSonicShoes className="w-24 h-24 mb-4 text-gray-700" />
                <FaCheckCircle className="absolute top-0 right-0 text-green-500 text-2xl" />
              </div>
              <p className="text-left font-semibold text-[#403130] ml-16">
                <span className="text-2xl">SẢN PHẨM ÁP DỤNG ĐỔI:</span>
                <br />
                <span className="block">- Hỗ trợ đổi size</span>
                <span className="block">
                  - Sản phẩm còn mới, chưa qua sử dụng/giặt tẩy
                </span>
                <span className="block">- Còn nguyên tem mác sản phẩm</span>
              </p>
            </div>
            <div className="w-1/3 flex flex-col items-center mr-8">
              <div className="relative">
                <GiSonicShoes className="w-24 h-24 mb-4 text-gray-700" />
                <FaTimesCircle className="absolute top-0 right-0 text-red-500 text-2xl" />
              </div>
              <p className="text-left font-semibold text-[#403130] ml-4">
                <span className="text-2xl">SẢN PHẨM KHÔNG ÁP DỤNG ĐỔI:</span>
                <br />
                <span className="block">- Không hỗ trợ đổi màu, đổi mẫu</span>
                <span className="block">- Sản phẩm giảm giá trên 30%</span>
                <span className="block">chỉ hỗ trợ đổi size</span>
              </p>
            </div>
          </div>
          <p className="mt-16 text-sm text-gray-600 font-semibold italic">
            * Không hỗ trợ trả hàng/hoàn tiền với trường hợp khách đã nhận hàng
            và thanh toán.
          </p>
          <p className="mt-2 text-sm text-gray-600 font-semibold italic">
            * Shop chỉ áp dụng đổi mẫu trong trường hợp sản phẩm khách mua không
            còn size để đổi.
          </p>
          <p className="mt-2 text-sm text-gray-600 font-semibold italic">
            Sản phẩm đổi áp dụng nguyên giá, trường hợp có giá trị lớn hơn sản
            phẩm ban đầu, quý khách thanh
          </p>
          <p className="mt-2 text-sm text-gray-600 font-semibold italic">
            toán thêm phần tiền chênh lệch. Trường hợp đổi sản phẩm có giá trị
            thấp hơn, chúng tôi sẽ không hoàn tiền.
          </p>
          <p className="mt-2 text-sm text-gray-600 font-semibold italic">
            Áp dụng đổi: CHỈ 1 LẦN DUY NHẤT
          </p>
          <p className="mt-16 text-center text-[#403130] font-semibold italic">
            Website: www.qmshop.com.vn | Hotline: 0365.087.570 hoặc 0982.942.754
          </p>
        </div>
      </div>
      <h1 className="mt-4 mb-2 w-full max-w-7xl mx-auto text-left font-bold text-[#c0392b] text-xl p-2 relative z-10 ml-2">
        II. Chính sách bảo hành
      </h1>
      <div className="h-16 flex flex-col items-center">
        <img src={logoApp.url} alt="Logo" className="h-full" />
      </div>

      <div className="bg-white flex-col items-center p-6 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold italic mb-0 text-[#403130]">
            Khi mua sản phẩm chính hãng tại Shop, quý khách sẽ được hỗ trợ các
            dịch vụ bảo hành theo quy định sau:
          </h1>
        </div>

        <div className="bg-black text-white p-12 mb-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 max-w-none">
            1. QUY TRÌNH BẢO HÀNH:
          </h2>
          <div className="flex justify-between text-left items-start max-w-none">
            <div className="flex items-start">
              <div className="text-3xl font-bold mr-6">1</div>
              <p>
                Khách hàng gửi sản phẩm <br /> bảo hành tại hệ thống.
              </p>
            </div>
            <div className="flex items-start">
              <div className="text-3xl font-bold mr-6">2</div>
              <p>QM Shop tiếp nhận và đánh giá sản phẩm.</p>
            </div>
            <div className="flex items-start">
              <div className="text-3xl font-bold mr-6">3</div>
              <p>
                Liên lạc tư vấn giúp khách hàng <br /> về tình trạng sản phẩm và
                dự kiến thời gian bảo hành.
              </p>
            </div>
            <div className="flex items-start">
              <div className="text-3xl font-bold mr-6">4</div>
              <p>
                Tiến hành bảo hành và gửi <br /> trả khách hàng sau khi đã{" "}
                <br /> hoàn thiện quy trình.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-2 mt-10">
          <h2 className="text-xl font-semibold mb-4">2. NỘI DUNG BẢO HÀNH:</h2>
        </div>
        <div className="grid grid-cols-3 gap-12 mb-8">
          <div
            className="border border-yellow-500 rounded-lg p-8 shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #f59e0b 30%, #ffffff 30%)",
            }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center">1 tháng</h3>
            <p className="mt-8">
              Trong vòng 1 tháng kể từ ngày mua sắm, hỗ trợ 1 đổi 1 (cùng mẫu,
              cùng màu, cùng size,...) với các sản phẩm <br /> bị lỗi, kém chất
              lượng từ phía nhà sản xuất...
            </p>
            <p className="mt-2">
              Trường hợp sản phẩm đổi hết hàng, khách hàng có thể <br /> đổi
              sang sản phẩm khác có giá tương đương hoặc cao hơn(Chỉ áp dụng đổi
              trả với sản phẩm mua nguyên giá).
            </p>
          </div>
          <div
            className="border border-yellow-500 rounded-lg p-8 shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #f59e0b 30%, #ffffff 30%)",
            }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center">6 tháng</h3>
            <p className="mt-8">
              Trong vòng 6 tháng kể từ ngày mua sắm, chúng tôi hỗ trợ sửa chữa,
              bảo hành cho các trường hợp sau: Bong tróc,nổ góc da, keo ép nhiệt
              bị bong, bị hở, bung, đứt chỉ.
            </p>
          </div>
          <div
            className="border border-yellow-500 rounded-lg p-8 shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #f59e0b 30%, #ffffff 30%)",
            }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center">Trọn đời</h3>
            <p className="mt-8">
              Cam kết cung cấp dịch vụ vệ sinh, làm sạch trọn đời cho các sản
              phẩm.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">3. THỜI GIAN BẢO HÀNH:</h2>
            <p>
              Các sản phẩm sẽ được thực hiện bảo hành trong vòng 7 ngày kể từ
              khi nhận được sản phẩm.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">4. ĐIỀU KIỆN BẢO HÀNH:</h2>
            <p>
              Sản phẩm được mua tại <span className="font-bold">QM SHOP</span>{" "}
              và còn trong thời gian được bảo hành.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-12">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">5. CHI PHÍ BẢO HÀNH:</h2>
            <ul className="list-disc pl-5">
              <li>
                Đối với sản phẩm bảo hành dưới 6 tháng, miễn phí ship 2 chiều -
                đổi trả.
              </li>
              <li>
                Đối với sản phẩm bảo hành trọn đời, quý khách vui lòng thanh
                toán phí ship 1 chiều khi gửi <br /> hàng về cho cửa hàng.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-yellow-500 italic mb-4">
              Lưu ý:
            </p>
            <p className="text-sm list-disc pl-5 italic text-yellow-500">
              Vui lòng cung cấp đúng số điện thoại đã từng mua hàng được cập
              nhật trên hệ thống hoặc cung cấp đầy đủ hóa đơn chứng từ hợp lệ để
              chúng tôi áp dụng dịch vụ bảo hành cho những trường hợp đáp ứng
              đúng điều kiện bảo hành. Các dịch vụ không nằm trong trường hợp
              bảo hành sẽ được đánh giá và đưa ra quyết định cuối cùng. Với{" "}
              <br /> mọi trường hợp, quyết định của cửa hàng là quyết định cuối
              cùng.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-black font-semibold italic mb-8">
        Lưu ý về những trường hợp sẽ không nhận bảo hành:
      </p>
      <div className="container mx-auto p-4 mb-16">
        <div className="grid grid-cols-2 gap-6 justify-center">
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>Quá thời gian bảo hành theo quy định bảo hành.</li>
            <li>Sản phẩm được giảm giá trên 30%.</li>
            <li>Sản phẩm không còn phụ kiện thay thế.</li>
          </ul>

          <div
            className="border border-yellow-500 rounded-lg p-6 shadow-md"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #f59e0b 30%, #ffffff 30%)",
            }}
          >
            <div className="flex justify-center text-black italic ">
              Các sản phẩm được đánh giá do lỗi từ phía người sử dụng như:
            </div>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
              <li>
                Giày dép đã sử dụng bị mòn gót, bể đế, va chạm làm trầy gót, gãy
                gót, xước da...
              </li>
              <li>
                Bảo quản không đúng quy cách như: lau hóa chất làm ố da, phai
                màu, để lâu ít
                <br />
                sử dụng để tự phân hủy, da khô cứng, lão hóa không bám keo.
              </li>
              <li>Sản phẩm bị mất phụ kiện trang trí (khóa, nơ...).</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WarrantyPolicy;
