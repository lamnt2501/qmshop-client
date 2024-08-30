import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductsItem,
  selectProductsStatus,
  selectFiltersColors,
  selectFiltersSizes,
  selectFiltersPrice,
  presentValue,
  selectCategory,
  selectLimitDefoult,
  selectPage,
  addProducts,
  selectAllProducts,
  resetAllProducts,
  setPage,
  resetParamsPage,
} from "../../../../app/reducers";
import { Loading, ProductCard } from "../../../../components";
import { FETCH_LOADING, FETCH_SUCCEEDED } from "../../../../config";

const ProductsList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsItem);
  const allProducts = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);

  // params
  // const category = useSelector(selectCategory);
  const filterColors = useSelector(selectFiltersColors);
  const filterSizes = useSelector(selectFiltersSizes);
  const filterPrice = useSelector(selectFiltersPrice);
  const sortType = useSelector(presentValue);
  const limit = useSelector(selectLimitDefoult);
  const page = useSelector(selectPage);

  // call lại api khi param thay đổi
  useEffect(() => {
    const params = {
      category: categoryId ?? null,
      minPrice: filterPrice[0],
      maxPrice: filterPrice[1],
      sort: sortType.sort,
      order: sortType.order,
      limit: limit,
      page: page,
    };
    filterColors.length > 0
      ? (params.color = filterColors.join(","))
      : (params.color = null);
    filterSizes.length > 0
      ? (params.size = filterSizes.join(","))
      : (params.size = null);
    dispatch(fetchProducts(params));
  }, [filterColors, filterSizes, filterPrice, sortType, categoryId, page]);

  // thêm các sản phẩm mới featch vào danh sách được in ra
  useEffect(() => {
    if (status === FETCH_SUCCEEDED) {
      dispatch(addProducts(products));
    }
  }, [products]);

  // reset danh sách sản phẩm khi các phần tử của bộ lọc thay đổi
  useEffect(() => {
    dispatch(resetAllProducts());
    dispatch(resetParamsPage());
  }, [filterColors, filterSizes, filterPrice, sortType, categoryId]);

  useEffect(() => {
    // Thêm sự kiện cuộn
    const handleScroll = () => {
      //  Lấy giá trị khoảng cách từ đầu trang đến vị trí hiện tại
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // Lấy chiều cao tổng cộng của tài liệu
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;

      // Lấy chiều cao của cửa sổ hiển thị
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      if (
        scrollTop + clientHeight >= scrollHeight - 5 &&
        status !== FETCH_LOADING &&
        products.length > 0
      ) {
        dispatch(setPage());
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, [status]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {status === FETCH_LOADING ?? <Loading />}
      {allProducts.length > 0
        ? allProducts.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))
        : undefined}
    </div>
  );
};

export default ProductsList;
