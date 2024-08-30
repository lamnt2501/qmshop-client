import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewProducts,
  selectNewProductsItem,
  selectNewProductsStatus,
} from "../../../app/reducers";
import { ProductCard, Sliders,Container } from "../../../components";
import { newPeoductsSlideSettings } from "../../../config";

const NewProducts = () => {
  const dispatch = useDispatch();
  const newProducts = useSelector(selectNewProductsItem);
  const state = useSelector(selectNewProductsStatus);

  useEffect(() => {
    const params = { sort: "created_at", order: "ASC" };
    dispatch(fetchNewProducts(params));
  }, [dispatch]);

  return (
    <Container>
      <div className="text-center text-3xl font-bold uppercase pb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          các sản phẩm mới nhất
        </span>
      </div>
      <Sliders datas={newProducts} settings={newPeoductsSlideSettings}>
        <ProductCard />
      </Sliders>
    </Container>
  );
};

export default NewProducts;
