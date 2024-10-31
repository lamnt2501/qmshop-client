import PropTypes from "prop-types";
import { CustomLink, Image } from "../../../../../components";
import { priceConvert } from "../../../../../utils";
import { Button } from "@mui/material";

const ProductItem = ({ product, rate, openRate }) => {
  return (
    <div className="grid grid-cols-12 px-4 py-2 gap-2">
      <div className="col-span-1">
        <Image data={{ name: product.name, image: product.imgUrl }} />
      </div>
      <div className="col-span-7 flex flex-col gap-2">
        <CustomLink >{product.name}</CustomLink>
        <div>
          <span>màu sắc: </span>
          <span>{product.color} </span>
        </div>
        <div>
          <span>size: </span>
          <span>{product.size} </span>
        </div>
        {rate && (
          <div>
            <Button variant="outlined" color="success" onClick={() => openRate(product)}>
              Đánh giá
            </Button>
          </div>
        )}
      </div>
      <div className="col-span-4 justify-self-end self-center">
        {priceConvert(product.price)} x {product.quantity}
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  rate: PropTypes.bool,
  openRate:PropTypes.func,
};

export default ProductItem;
