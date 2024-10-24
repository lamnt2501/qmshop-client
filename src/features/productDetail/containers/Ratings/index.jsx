import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Pagination,
  Rating,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import PropTypes from "prop-types";
import { CustomBox, Title } from "../../../../components";
import { useState } from "react";
const Ratings = ({ ratings, avgRatings }) => {
  const [selectorFilterRating, setSelectorRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const newRating = {
    _0: [
      ...ratings["_5"],
      ...ratings["_4"],
      ...ratings["_3"],
      ...ratings["_2"],
      ...ratings["_1"],
    ],
    ...ratings,
  };
  const filterRating = [
    `Tất cả (${newRating["_0"].length})`,
    `1 Sao (${newRating["_1"].length})`,
    `2 Sao (${newRating["_2"].length})`,
    `3 Sao (${newRating["_3"].length})`,
    `4 Sao (${newRating["_4"].length})`,
    `5 Sao (${newRating["_5"].length})`,
  ];

  const currentItems = newRating[`_${selectorFilterRating}`].slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSelectFilter = (index) => {
    setSelectorRating(index);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Title>đánh giá sản phẩm</Title>

      <CustomBox className="flex p-8 space-x-4 flex-col lg:flex-row">
        <div className="flex flex-col items-center gap-2 basis-1/4">
          <h4 className="text-2xl">{avgRatings} trên 5</h4>
          <Rating
            name="product-rating"
            defaultValue={avgRatings}
            precision={0.1}
            size="large"
            readOnly
          />
        </div>
        <div className="basis-full">
          <div className="flex gap-2">
            {filterRating.map((item, index) => (
              <Button
                variant={selectorFilterRating === index ? "outlined" : "text"}
                color={selectorFilterRating === index ? "warning" : "inherit"}
                onClick={() => handleSelectFilter(index)}
                key={index}
                className="basis-1/6"
              >
                {item}
              </Button>
            ))}
          </div>
          {currentItems.map((rating, i) => (
            <Card sx={{ mb: 2 }} key={i}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: grey[500] }} aria-label="user">
                    {rating.by.charAt(0)}
                  </Avatar>
                }
                title={rating.by}
                subheader={
                  <>
                    <Rating value={rating.rating} readOnly />
                    <Typography>{rating.comment}</Typography>
                  </>
                }
              />
            </Card>
          ))}
          {newRating[`_${selectorFilterRating}`].length > 0 && (
            <Pagination
              count={Math.ceil(
                newRating[`_${selectorFilterRating}`].length / itemsPerPage
              )}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          )}
        </div>
      </CustomBox>
    </div>
  );
};

Ratings.propTypes = {
  ratings: PropTypes.object,
  avgRatings: PropTypes.number,
};
export default Ratings;
