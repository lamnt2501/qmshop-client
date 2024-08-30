import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectorColor,
  setSelectorSize,
  selectorColor,
  selectorOption,
  selectorSize,
  setSelectorOption,
  selectAuthToken,
  addItemToCart,
  updateCartItems,
  selectCartsStatus,
  selectCartsItem,
  resetCartStatus,
} from "../../../../app/reducers";
import {
  ImageItem,
  SizeItem,
  ListPolicy,
  ProductStatus,
  ProductColorName,
} from "../../components";
import { AlertMessage, Button, CustomSnackbar, InputQuantity } from "../../../../components";
import { FaRegHeart } from "react-icons/fa";
import { ALERT_ERROR, ALERT_SUCCESS, FETCH_FAILED, FETCH_SUCCEEDED } from "../../../../config";
import { priceConvert } from "../../../../utils/priceConvert";

const ProductInfomation = ({ data }) => {
  const { name, description, brand, categories, options, images, slug } = data;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const token = useSelector(selectAuthToken);
  const cartsStatus = useSelector(selectCartsStatus);
  const selectOption = useSelector(selectorOption);

  const selectColor = useSelector(selectorColor);
  const selectSize = useSelector(selectorSize);

  const newImages = Object.groupBy(images, ({ color }) => color);
  const optionsByColor = Object.groupBy(options, ({ color }) => color);
  const optionsBySize = Object.groupBy(options, ({ size }) => size);

  // xử lý lần đầu re-render
  useEffect(() => {
    // chọn vào phần tử option đầu tiên
    if (selectColor === "" && selectSize === "" && options[0]) {
      dispatch(setSelectorOption(options[0]));
      dispatch(setSelectorColor(options[0].color));
      dispatch(setSelectorSize(options[0].size));
    }

    // chỉnh sửa quantity sau khi re-render
    if (quantity > selectOption.quantity) setQuantity(selectOption.quantity);
  }, [selectColor, selectSize]);

  // kiểm tra các màu có tồn tại hay không khi chọn size
  const isColorValid = (color) => {
    return selectSize !== ""
      ? optionsBySize[selectSize].some((option) => {
          return option.color === color;
        })
      : true;
  };

  // kiểm tra các size có tồn tại hay không khi chọn màu
  const isSizeValid = (size) => {
    return selectColor !== ""
      ? optionsByColor[selectColor].some((option) => {
          return option.size === size;
        })
      : true;
  };

  // xử lý chọn màu
  const handleSetSelectorColor = (color) => {
    dispatch(setSelectorColor(color));
    if (selectColor !== "" && selectSize !== "") {
      const newOptionSelector = options.find(
        (option) => option.color === color && option.size === selectSize
      );
      if (newOptionSelector) dispatch(setSelectorOption(newOptionSelector));
      else {
        const newOptionSelector = options.find(
          (option) => option.color === color
        );
        dispatch(setSelectorOption(newOptionSelector));
        dispatch(setSelectorSize(newOptionSelector.size));
      }
    }
  };

  // xử lý chọn size
  const handleSetSelectorSize = (size) => {
    dispatch(setSelectorSize(size));
    if (selectColor !== "" && selectSize !== "") {
      const newOptionSelector = options.find(
        (option) => option.color === selectColor && option.size === size
      );
      if (newOptionSelector) dispatch(setSelectorOption(newOptionSelector));
      else {
        const newOptionSelector = options.find(
          (option) => option.size === size
        );
        dispatch(setSelectorOption(newOptionSelector));
        dispatch(setSelectorColor(newOptionSelector.color));
      }
    }
  };

  // Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = () => {
    if (token) {
      dispatch(
        updateCartItems([
          {
            sku: selectOption.sku,
            quantity: quantity,
          },
        ])
      );

      return;
    }
    dispatch(
      addItemToCart({
        slug: slug,
        sku: selectOption.sku,
        name: name,
        price: selectOption.price,
        color: selectOption.color,
        size: selectOption.size,
        imageUrl: newImages[selectColor][0].url,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="my-4">
      <div className="mb-5 ">
        <h2 className="font-normal text-3xl">{name}</h2>
      </div>

      <div className="mb-5">
        <span className="text-red-600 text-3xl">
          {priceConvert(selectOption.price)}
        </span>
      </div>

      <div className="mb-5">
        <ProductStatus
          selectColor={selectColor}
          selectorSize={selectSize}
          quantity={selectOption.quantity ?? null}
        />
      </div>

      <div className="mb-5">
        <ProductColorName color={selectColor} />
      </div>

      <ul className="mb-5 flex flex-wrap">
        {Object.keys(newImages).map((key) => (
          <li key={key} className="mr-1">
            <ImageItem
              image={newImages[key][0]}
              isValid={isColorValid(key)}
              isSelector={key === selectColor}
              onClick={() => handleSetSelectorColor(newImages[key][0].color)}
            />
          </li>
        ))}
      </ul>

      <div className="mb-5">
        <span>Kích thước: {selectSize}</span>
      </div>

      <ul className="mb-5 flex flex-wrap">
        {Object.keys(optionsBySize).map((key) => (
          <li key={key} className="mr-1">
            <SizeItem
              size={key}
              isValid={isSizeValid(key)}
              isSelector={key.toString() === selectSize}
              onClick={() => handleSetSelectorSize(key)}
            />
          </li>
        ))}
      </ul>

      <div className="mb-5">
        <span>Số lượng: </span>
      </div>

      <div className="mb-5 ">
        <InputQuantity
          min={1}
          limit={selectOption.quantity}
          value={quantity}
          setValue={setQuantity}
        />
      </div>

      <div className="mb-5 flex gap-1 items-stretch">
        <div className="basis-11/12" onClick={() => handleAddToCart()}>
          <Button black afterAnimation isFull>
            Thêm vào giỏ hàng
          </Button>
        </div>

        <div className="basis-1/12 flex justify-center items-center text-xl">
          <Button white>
            <FaRegHeart />
          </Button>
        </div>
      </div>

      <div className="mb-5">
        <ListPolicy />
      </div>
      <CustomSnackbar
        openSnackbar={cartsStatus === FETCH_SUCCEEDED}
        handleCloseSnackbar={() => dispatch(resetCartStatus())}
        snackbarSeverity={ALERT_SUCCESS}
      >
        Thêm sản phẩm vào giỏ hàng thành công
      </CustomSnackbar>
      <CustomSnackbar
        openSnackbar={cartsStatus === FETCH_FAILED}
        handleCloseSnackbar={() => dispatch(resetCartStatus())}
        snackbarSeverity={ALERT_ERROR}
      >
        Thêm sản phẩm vào giỏ hàng không thành công
      </CustomSnackbar>
    </div>
  );
};

export default ProductInfomation;
