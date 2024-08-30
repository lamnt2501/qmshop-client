import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CustomBreadcrumbs, Container, Loading } from "../../components";
import {
  LibraryStyles,
  ProductDescription,
  ProductInfomation,
  ProductSlideImage,
} from "./containers";

import {
  fetchProduct,
  resetCartStatus,
  resetProduct,
  selectProductError,
  selectProductItem,
  selectProductStatus,
} from "../../app/reducers";
import { FETCH_FAILED, FETCH_LOADING, FETCH_SUCCEEDED } from "../../config";
import useTitle from "../../hooks/useTitle";
const ProductDetail = () => {
  const { slug } = useParams();

  const dispatch = useDispatch();
  const product = useSelector(selectProductItem);
  const status = useSelector(selectProductStatus);
  const error = useSelector(selectProductError);

  useEffect(() => {
    dispatch(fetchProduct(`${slug}`));
    return () => {
      dispatch(resetProduct());
      dispatch(resetCartStatus());
    };
  }, [dispatch, slug]);

  useTitle(product.name ?? "Sản phẩm")

  if (status === FETCH_LOADING) return <Loading />;
  else if (status === FETCH_FAILED) return <div>{error}</div>;
  else if (status === FETCH_SUCCEEDED)
    return (
      <>
        <Container>
          <CustomBreadcrumbs breadcrumbs={[{ name: product.name }]} />
          <div className={"flex flex-col lg:flex-row gap-4"}>
            <div className="w-full h-full lg:sticky lg:top-0">
              <ProductSlideImage images={product.images} />
            </div>
            <div className="w-full h-full lg:sticky lg:top-0">
              <ProductInfomation data={product} />
            </div>
          </div>
        </Container>

        <Container>
          <ProductDescription data={product} />
        </Container>

        <div className="w-full my-5">
          <LibraryStyles />
        </div>
      </>
    );
};

export default ProductDetail;
