import { CustomLink } from "../../components";

const NotFound = () => {
  return (
    <div className="m-auto text-center">
      <h1 className="text-4xl font-semibold my-6 text-red-500">
        404 - Page Not Found
      </h1>
      <p className="my-6">
        Đường dẫn này không tồn tại, vui lòng quay lại{" "}
        <CustomLink url={"/home"} className={"text-blue-500"}>
          Trang chủ
        </CustomLink>
      </p>
    </div>
  );
};

export default NotFound;
