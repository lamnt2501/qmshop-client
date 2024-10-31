import PropTypes from "prop-types";
import ProductItem from "../../components/ProductItem";
import { useState } from "react";
import { Box, Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Textarea } from "@mui/joy";
import { useDispatch } from "react-redux";
import { addRatings } from "../../../../../app/reducers";

const RateProduct = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const labels = {
    1: "Rất tệ+",
    2: "Tệ",
    3: "Tạm ổn",
    4: "Tốt",
    5: "Tuyệt vời",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    dispatch(addRatings({ rating: value, comment, productId: product.id }));
    onClose();
  };

  return (
    <>
      <div className="fixed top-1/2 left-1/2 cursor-auto -translate-x-1/2 -translate-y-1/2 p-5 bg-white transition-opacity z-30 overflow-hidden rounded-md space-y-4">
        <div className="text-2xl">Đánh giá sản phẩm</div>
        <ProductItem product={product} />
        <div className="flex gap-4">
          <span>Chất lượng sản phẩm</span>
          <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
        </div>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Cảm nhận của bạn về sản phẩm này"
          minRows={2}
          size="lg"
          variant="soft"
        />
        <div className="flex justify-end gap-4">
          <Button variant="outlined" onClick={onClose}>
            Trở lại
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleSubmit()}
          >
            Hoàn thành
          </Button>
        </div>
      </div>
    </>
  );
};

RateProduct.propTypes = {
  product: PropTypes.object,
  onClose: PropTypes.func,
};

export default RateProduct;
