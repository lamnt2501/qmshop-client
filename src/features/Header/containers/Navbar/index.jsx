import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdow from "../../components/Dropdow";
import "./Navbar.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBrands,
  fetchCategories,
  selectBrandsError,
  selectBrandsItem,
  selectBrandsStatus,
  selectCategoriesError,
  selectCategoriesItem,
  selectCategoriesStatus,
  setParamsCategory,
} from "../../../../app/reducers";
import { FETCH_SUCCEEDED } from "../../../../config";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // categories
  const categories = useSelector(selectCategoriesItem);
  const categoriesStatus = useSelector(selectCategoriesStatus);
  const categoriesError = useSelector(selectCategoriesError);

  const brands = useSelector(selectBrandsItem);
  const brandsStatus = useSelector(selectBrandsStatus);
  const brandsError = useSelector(selectBrandsError);

  const [listBrands, setListBrands] = useState([]);
  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    const params = {};

    dispatch(fetchCategories(params));
    dispatch(fetchBrands({}));
  }, [dispatch]);

  const handleGoToCollections = (id, name, slug) => {
    dispatch(setParamsCategory({ id, name }));
    navigate(`/collections/${slug}`);
  };

  useEffect(() => {
    if (brandsStatus === FETCH_SUCCEEDED && categoriesStatus === FETCH_SUCCEEDED) {
      // console.log(111111);
      const newListBrands = brands.reduce((acc, brand) => {
        const categoryBrand = categories.find(
          (category) => category.name === brand.name
        );

        if (categoryBrand) {
          acc.push({
            pageName: categoryBrand.name,
            // url: `/collections/${categoryBrand.name}`,
            onClick: () =>
              handleGoToCollections(
                categoryBrand.id,
                categoryBrand.name,
                categoryBrand.slug
              ),
          });
        }

        return acc;
      }, []);

      const newListCategories = categories.reduce((acc, category) => {
        const brandCategory = brands.find(
          (brand) => brand.name === category.name
        );

        if (!brandCategory) {
          acc.push({
            pageName: category.name,
            onClick: () =>
              handleGoToCollections(category.id, category.name, category.slug),
          });
        }

        return acc;
      }, []);

      setListBrands(newListBrands);
      setListCategories(newListCategories);
    }
  }, [brandsStatus, categoriesStatus]);

  const listPage = [
    { pageName: "Home", url: "/" },
    { pageName: "Đăng nhập", url: "/login" },
    { pageName: "Đăng ký", url: "/register" },
    { pageName: "Bộ sưu tập", url: "/collections" },
    { pageName: "Giỏ hàng", url: "/carts" },
    { pageName: "Thanh toán", url: "/checkout" },
  ];

  const navItem = clsx(
    "navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 z-10 cursor-pointer"
  );

  return (
    <nav className="navbar flex justify-left">
      {/* <div className={navItem}>
        <NavLink to={"/"}>Trang chủ</NavLink>
      </div> */}
      {/* <div className={navItem}>
        <Dropdow listPage={listPage} itemLeft>
          Trang
        </Dropdow>
      </div> */}
      <div className={navItem}>
        <Dropdow listPage={listBrands} itemLeft>
          Nhãn hàng
        </Dropdow>
      </div>
      {/* ) : undefined} */}
      <div className={navItem}>
        <Dropdow listPage={listCategories} itemLeft>
          Các loại giày
        </Dropdow>
      </div>
    </nav>
  );
};

export default Navbar;
