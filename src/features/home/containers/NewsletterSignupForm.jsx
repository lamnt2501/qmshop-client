import { newsletterSignupForm } from "../../../config";
import { Button, Image, Title } from "../../../components";
import { TextField } from "@mui/material";
import { useState } from "react";
const NewsletterSignupForm = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="relative overflow-hidden bg-white w-full h-full pb-[130px] pt-[104px] text-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-2 bg-cover bg-center"
        style={{ backgroundImage: newsletterSignupForm }}
      >
        <Image data={newsletterSignupForm} />
      </div>
      <div className="relative flex">
        <div className="z-2 relative px-12 max-w-container w-full m-auto">
          <div className="max-w-[950px] bg-white flex flex-col m-auto p-5 md:p-28 rounded-md overflow-hidden">
            <Title className="mb-4">THAM GIA VÀO CỘNG ĐỒNG QMSHOES</Title>
            <p className="mb-4">
              Khuyến mãi, sản phẩm mới sẽ được gửi trực tiếp tới hộp thư của bạn
            </p>
            <div className="w-full mb-4">
              <form method="post" action="">
                <div className="w-full flex gap-2">
                  <div className="basis-3/4 ">
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="basis-1/4">
                    <Button black afterAnimation isFull>
                      Đăng ký
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignupForm;
