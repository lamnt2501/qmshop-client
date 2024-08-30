import React from "react";
import { Breadcrumbs } from "@mui/material";
import CustomLink from "../CustomLink";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CustomBreadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="my-4">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <CustomLink url="/">Trang chủ</CustomLink>
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={index}>
            {breadcrumb.url ? (
              <CustomLink
                url={breadcrumb.url}
                className={index === breadcrumbs.length - 1 && "font-medium"}
              >
                {breadcrumb.name}
              </CustomLink>
            ) : (
              <span
                key={breadcrumb.name}
                className={index === breadcrumbs.length - 1 && "font-medium"}
              >
                {breadcrumb.name}
              </span>
            )}
          </span>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
