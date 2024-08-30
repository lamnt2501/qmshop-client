import React, { useEffect } from "react";
import { bannerWrap, FETCH_LOADING } from "../../../config";
import { ProductCard, Loading, Container } from "../../../components";
import BannerWrap from "../components/BannerWrap";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductsItem,
  selectProductsStatus,
  selectProductsError,
  fetchProducts,
} from "../../../app/reducers";

const OutstandingContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsItem);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const params = { limit: 4 };
  // const params = { size: 4 };

  useEffect(() => {
    dispatch(fetchProducts(params));
  }, []);

  if (status === FETCH_LOADING) return <Loading />;

  return (
    <Container>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
        <div className="col-span-1 order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            {products
              ? products.map((product, index) => (
                  <div key={index} className="col-span-1">
                    <ProductCard data={product} />
                  </div>
                ))
              : undefined}
          </div>
        </div>
        <div className="col-span-1 order-1 md:order-2 rounded-md overflow-hidden">
          <BannerWrap data={bannerWrap[3]} bottom />
        </div>
      </div>
    </Container>
  );
};

export default OutstandingContainer;
